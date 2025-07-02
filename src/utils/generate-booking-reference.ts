import { BookingModel } from "@src/models"; // Asegúrate que la ruta sea correcta

function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export async function generateUniqueBookingReference(length: number = 6): Promise<string> {
    let attempts = 0;
    const maxAttempts = 10; // Evitar bucles infinitos en caso improbable de colisiones persistentes

    while (attempts < maxAttempts) {
        const reference = generateRandomString(length);
        try {
            const existingBooking = await BookingModel.findOne({
                where: { bookingReference: reference },
                attributes: ['id'] // Solo necesitamos saber si existe, no traer todo el modelo
            });

            if (!existingBooking) {
                return reference; // Referencia es única
            }
        } catch (error) {
            // Podría haber un error de DB, en ese caso es mejor no continuar y lanzar el error
            console.error("Error checking booking reference uniqueness:", error);
            throw new Error("Failed to check booking reference uniqueness due to a database error.");
        }
        
        attempts++;
    }

    // Si después de maxAttempts no se encuentra una referencia única (muy improbable con UUIDs o strings largos)
    console.error(`Failed to generate a unique booking reference after ${maxAttempts} attempts.`);
    // Se podría optar por un string más largo o añadir un timestamp para aumentar la unicidad
    // o lanzar un error para que se maneje la situación.
    // Por ahora, se concatena con un timestamp para aumentar probabilidad de unicidad en caso extremo.
    return generateRandomString(length) + Date.now().toString().slice(-4);
}

// Ejemplo de uso (no para producción directa aquí):
// (async () => {
//   try {
//     const ref = await generateUniqueBookingReference();
//     console.log('Generated unique reference:', ref);
//   } catch (error) {
//     console.error(error);
//   }
// })();
