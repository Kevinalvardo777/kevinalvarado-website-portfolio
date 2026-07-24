import type { ContactMessage } from '@/types';

export interface ContactService {
  submit(message: ContactMessage): Promise<{ ok: boolean; message: string }>;
}

export class DefaultContactService implements ContactService {
  async submit(message: ContactMessage): Promise<{ ok: boolean; message: string }> {
    const subject = encodeURIComponent(message.subject || 'Contacto desde portafolio');
    const body = encodeURIComponent(`Nombre: ${message.name}\nCorreo: ${message.email}\nEmpresa: ${message.company}\nMensaje: ${message.message}`);
    window.location.href = `mailto:kevin.alvarado.cornejo@gmail.com?subject=${subject}&body=${body}`;
    return { ok: true, message: 'Gracias por el mensaje. Se abrirá tu cliente de correo.' };
  }
}

export const contactService = new DefaultContactService();
