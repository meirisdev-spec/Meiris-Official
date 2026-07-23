"use client";
import { useEffect, useRef } from 'react';
<<<<<<< HEAD
import styles from './Contact.module.css';
export default function Contact({ data }: { data: any }) {
  const sectionRef = useRef(null);

=======
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import styles from './Contact.module.css';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact({ data }: { data: any }) {
  const sectionRef = useRef(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Thank you! Your message has been sent successfully.");
    form.reset();
  }

>>>>>>> 787f409bb4eb7f44a75dfb3c23bbef6ec02b550c
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add(styles.visible);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.contactSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.contactBox}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{data.heading}</h2>
            <p className={styles.description}>
              {data.description}
            </p>
<<<<<<< HEAD
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder={data.namePlaceholder} className={styles.input} required />
                <input type="email" placeholder={data.emailPlaceholder} className={styles.input} required />
              </div>
              <textarea placeholder={data.messagePlaceholder} className={styles.textarea} rows={4} required></textarea>
              <button type="submit" className={styles.submitBtn}>{data.submitBtn}</button>
            </form>
=======
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputGroup}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <input type="text" placeholder={data.namePlaceholder} className={styles.input} {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500 font-medium text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <input type="email" placeholder={data.emailPlaceholder} className={styles.input} {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500 font-medium text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <textarea placeholder={data.messagePlaceholder} className={styles.textarea} rows={4} {...field}></textarea>
                      </FormControl>
                      <FormMessage className="text-red-500 font-medium text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <button type="submit" className={styles.submitBtn}>{data.submitBtn}</button>
              </form>
            </Form>
>>>>>>> 787f409bb4eb7f44a75dfb3c23bbef6ec02b550c
          </div>
          <div className={styles.imageContent}>
            <img src={data.imageUrl || "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} alt="Contact" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
