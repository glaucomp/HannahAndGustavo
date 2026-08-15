import React, { useState } from 'react';
import pb from '@/lib/pocketbaseClient';
import Sprig from '@/components/wedding/Sprig';

const initial = { full_name: '', email: '', phone: '', attending: 'yes', guests: 1, message: '' };

const fieldClass =
    'w-full border-b border-input bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors';

const RsvpForm = () => {
    const [form, setForm] = useState(initial);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const set = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

    const submit = async (event) => {
        event.preventDefault();
        setStatus('loading');
        setError('');

        try {
            await pb.collection('rsvps').create({
                full_name: form.full_name.trim(),
                email: form.email.trim(),
                phone: form.phone.trim(),
                attending: form.attending,
                guests: form.attending === 'yes' ? Number(form.guests) || 1 : 0,
                message: form.message.trim(),
            });
            setStatus('done');
        } catch (err) {
            setError(err?.message || 'Something went wrong. Please try again.');
            setStatus('error');
        }
    };

    if (status === 'done') {
        return (
            <div className="mx-auto max-w-md border border-border bg-card px-8 py-14 text-center">
                <Sprig className="mx-auto h-8 w-28 text-primary" />
                <h3 className="font-display mt-6 text-3xl font-light">Thank you</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Your reply has been sent to Hannah &amp; Gustavo. We cannot wait to celebrate with you by the water.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setForm(initial);
                        setStatus('idle');
                    }}
                    className="mt-8 text-[11px] uppercase tracking-widest-xl text-primary underline-offset-8 hover:underline"
                >
                    Send another reply
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="mx-auto max-w-xl space-y-8 text-left">
            <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="full_name" className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">
                        Full name
                    </label>
                    <input id="full_name" required value={form.full_name} onChange={set('full_name')} className={fieldClass} placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">
                        Email
                    </label>
                    <input id="email" type="email" required value={form.email} onChange={set('email')} className={fieldClass} placeholder="you@email.com" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">
                        Phone
                    </label>
                    <input id="phone" value={form.phone} onChange={set('phone')} className={fieldClass} placeholder="+61 400 000 000" />
                </div>
            </div>

            <fieldset className="space-y-4">
                <legend className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">Will you attend?</legend>
                <div className="flex gap-3">
                    {[
                        { value: 'yes', label: 'Joyfully yes' },
                        { value: 'no', label: 'Sadly no' },
                    ].map((opt) => (
                        <button
                            key={opt.value}
                            type="button"
                            onClick={() => setForm((prev) => ({ ...prev, attending: opt.value }))}
                            className={`min-h-[44px] flex-1 border px-4 text-[11px] uppercase tracking-widest-xl transition-colors active:scale-[0.98] ${
                                form.attending === opt.value
                                    ? 'border-primary bg-primary text-primary-foreground'
                                    : 'border-border text-muted-foreground hover:border-primary/60'
                            }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </fieldset>

            {form.attending === 'yes' && (
                <div className="flex flex-col gap-2">
                    <label htmlFor="guests" className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">
                        Number of guests (including you)
                    </label>
                    <input id="guests" type="number" min="1" max="12" value={form.guests} onChange={set('guests')} className={fieldClass} />
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest-xl text-muted-foreground">
                    A note for the couple (optional)
                </label>
                <textarea id="message" rows={3} value={form.message} onChange={set('message')} className={`${fieldClass} resize-none`} placeholder="Dietary needs, song requests, kind words" />
            </div>

            {error && <p className="text-xs text-destructive">{error}</p>}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="min-h-[48px] w-full bg-foreground px-8 text-[11px] uppercase tracking-widest-xl text-background transition-transform active:scale-[0.98] disabled:opacity-60"
            >
                {status === 'loading' ? 'Sending…' : 'Send our reply'}
            </button>
        </form>
    );
};

export default RsvpForm;
