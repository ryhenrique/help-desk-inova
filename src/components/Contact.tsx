
import { Mail, Phone, MessageSquare, Instagram, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:suporte@helpdeskinova.com.br';
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/helpdeskinova/', '_blank');
  };

  return (
    <section id="helpdesk-contact" className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 px-4 py-2 font-medium">
            <Shield className="w-4 h-4 mr-2" />
            Atendimento Especializado
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Fale com Nossos
            <span className="block text-blue-600 dark:text-blue-400">Especialistas</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Precisa de suporte técnico especializado? Entre em contato com nossa equipe de
            <span className="font-medium text-slate-800 dark:text-slate-200"> consultores certificados </span>
            através dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-slate-800 group cursor-pointer" onClick={handleWhatsAppClick}>
            <CardHeader className="pb-6 text-center">
              <div className="mx-auto bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 rounded-3xl shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-900 dark:text-white font-bold mb-2">WhatsApp Business</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-300 font-medium">+55 (21) 99131-8034</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Atendimento direto e rápido via WhatsApp. Nossa equipe responde em minutos.
              </p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Iniciar Conversa
              </Button>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-slate-800 group cursor-pointer" onClick={handleEmailClick}>
            <CardHeader className="pb-6 text-center">
              <div className="mx-auto bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-3xl shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-900 dark:text-white font-bold mb-2">E-mail Corporativo</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-300 font-medium">suporte@helpdeskinova.com.br</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Para solicitações formais e documentação técnica detalhada.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Enviar E-mail
              </Button>
            </CardContent>
          </Card>

          {/* Instagram Card */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-violet-50 to-white dark:from-violet-900/30 dark:to-slate-800 group cursor-pointer md:col-span-2 lg:col-span-1" onClick={handleInstagramClick}>
            <CardHeader className="pb-6 text-center">
              <div className="mx-auto bg-gradient-to-r from-violet-600 to-violet-700 p-6 rounded-3xl shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-900 dark:text-white font-bold mb-2">Instagram</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-300 font-medium">@helpdeskinova</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Acompanhe nossas novidades, dicas técnicas e projetos realizados.
              </p>
              <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Seguir no Instagram
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-800 dark:to-blue-900/20 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Atendimento Especializado 24/7
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está sempre disponível para resolver seus problemas de TI 
              com agilidade e eficiência. Entre em contato agora mesmo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button 
                size="lg" 
                onClick={handleEmailClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
