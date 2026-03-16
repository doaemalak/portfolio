import { useState, useEffect } from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageSquare, QrCode, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import QRCode from 'qrcode';

const Contact = () => {
  const [qrCode, setQrCode] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { isDark } = useTheme();

  // Generate QR code based on active theme for better contrast.
  useEffect(() => {
    const lienDestination = `${window.location.origin}/links`;

    QRCode.toDataURL(lienDestination, {
      width: 128,
      margin: 2,
      color: {
        dark: isDark ? '#ffffff' : '#3b82f6',
        light: isDark ? '#1e293b' : '#ffffff'
      }
    })
    .then(url => {
      setQrCode(url);
    })
    .catch(err => {
      console.error('Erreur QR Code:', err);
    });
  }, [isDark]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé ! (Simulation)');
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-slate-900 pt-24 pb-16 transition-colors duration-300 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            <Badge className="rounded-full bg-accent/15 text-accent hover:bg-accent/20">Contact</Badge>
            <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">Me Contacter</h2>
            <p className="mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
              Une question, une opportunite de stage, ou un projet Data/IA a discuter ? Je reponds avec plaisir.
            </p>
          </header>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-7 items-stretch">
            <Card className="h-full border border-slate-200/80 dark:border-slate-700/70 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 animate-in fade-in-0 slide-in-from-left-8 duration-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  Envoyer un message
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-slate-700 dark:text-white mb-2 font-medium">Nom</label>
                    <input
                      type="text"
                      className="w-full h-11 px-4 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-white mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full h-11 px-4 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-white mb-2 font-medium">Message</label>
                    <textarea
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                      rows="6"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-xl bg-accent text-white hover:bg-accent/90">
                    Envoyer le message
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="h-full border border-slate-200/80 dark:border-slate-700/70 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 animate-in fade-in-0 slide-in-from-right-8 duration-700 [animation-delay:120ms]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <QrCode className="h-5 w-5" />
                  </span>
                  Acces Rapide
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex justify-center mb-6">
                  {qrCode ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl" />
                      <img
                        src={qrCode}
                        alt="QR Code Portfolio"
                        className="relative rounded-xl shadow-lg border-4 border-white dark:border-slate-700"
                        width={150}
                        height={150}
                      />
                    </div>
                  ) : (
                    <div className="w-36 h-36 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                      <span className="text-slate-500 dark:text-slate-400">Generation...</span>
                    </div>
                  )}
                </div>

                <p className="text-center text-slate-600 dark:text-slate-300 text-sm mb-6">
                  Scannez pour acceder rapidement a mes liens professionnels.
                </p>

                <div className="space-y-3">
                  <Button asChild variant="secondary" className="w-full justify-between rounded-xl h-11 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-accent dark:hover:text-white">
                    <a href="/CV - Doae MalakAI.pdf" download>
                      <span className="inline-flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Telecharger mon CV
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button asChild variant="secondary" className="w-full justify-between rounded-xl h-11 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-accent dark:hover:text-white">
                    <a href="https://www.linkedin.com/in/doae-malak-719298297" target="_blank" rel="noopener noreferrer">
                      <span className="inline-flex items-center gap-2">
                        <Linkedin className="h-4 w-4" />
                        Mon LinkedIn
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button asChild variant="secondary" className="w-full justify-between rounded-xl h-11 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-accent dark:hover:text-white">
                    <a href="https://github.com/doaemalak" target="_blank" rel="noopener noreferrer">
                      <span className="inline-flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Mon GitHub
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-7 pt-5 border-t border-slate-200 dark:border-slate-600 text-center">
                  <p className="text-slate-600 dark:text-slate-300 mb-2">Ou contactez-moi directement :</p>
                  <a href="mailto:douae.malak05@gmail.com" className="inline-flex items-center gap-2 text-accent hover:underline font-semibold">
                    <Mail className="h-4 w-4" />
                    douae.malak05@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;