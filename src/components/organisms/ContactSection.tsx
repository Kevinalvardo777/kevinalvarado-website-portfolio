import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '@/components/atoms/Button';
import ContactField from '@/components/molecules/ContactField';
import { contactService } from '@/services/contactService';
import { useUiStore } from '@/store/uiStore';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().min(1, 'Company is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message should be longer'),
});

type ContactFormValues = z.infer<typeof schema>;

export default function ContactSection() {
  const language = useUiStore((state) => state.language);
  const [status, setStatus] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactFormValues) => {
    const result = await contactService.submit({
      name: data.name,
      email: data.email,
      company: data.company,
      subject: data.subject,
      message: data.message,
    });
    setStatus(result.message);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-shell">
        <div>
          <h2>{language === 'en' ? 'Contact' : 'Contacto'}</h2>
          <p>{language === 'en' ? "Let's discuss frontend architecture, delivery and digital experiences." : 'Hablemos de arquitectura frontend, entregas y experiencias digitales.'}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate aria-live="polite">
          <ContactField label={language === 'en' ? 'Name' : 'Nombre'} id="name" error={errors.name?.message?.toString()}>
            <input id="name" {...register('name')} />
          </ContactField>
          <ContactField label={language === 'en' ? 'Email' : 'Correo'} id="email" error={errors.email?.message?.toString()}>
            <input id="email" type="email" {...register('email')} />
          </ContactField>
          <ContactField label={language === 'en' ? 'Company' : 'Empresa'} id="company" error={errors.company?.message?.toString()}>
            <input id="company" {...register('company')} />
          </ContactField>
          <ContactField label={language === 'en' ? 'Subject' : 'Asunto'} id="subject" error={errors.subject?.message?.toString()}>
            <input id="subject" {...register('subject')} />
          </ContactField>
          <ContactField label={language === 'en' ? 'Message' : 'Mensaje'} id="message" error={errors.message?.message?.toString()}>
            <textarea id="message" rows={5} {...register('message')} />
          </ContactField>
          <Button type="submit">{language === 'en' ? 'Send' : 'Enviar'}</Button>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
