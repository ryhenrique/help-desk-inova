
import { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Formulário enviado:', formData);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe de especialistas entrará em contato em breve. Obrigado pela confiança!",
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-medium">
            <Shield className="w-4 h-4 mr-2" />
            Atendimento Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Fale com Nossos
            <span className="block text-blue-600">Especialistas</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Precisa de suporte técnico especializado? Entre em contato com nossa equipe de
            <span className="font-medium text-slate-800"> consultores certificados </span>
            e receba a solução mais adequada para suas necessidades corporativas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-900 font-bold">E-mail Corporativo</CardTitle>
                      <CardDescription className="text-slate-600 font-medium">suporte@helpdeskínova.com</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 rounded-2xl shadow-lg">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-900 font-bold">WhatsApp Business</CardTitle>
                      <CardDescription className="text-slate-600 font-medium">+55 (11) 99999-9999</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-violet-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-violet-600 to-violet-700 p-4 rounded-2xl shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-900 font-bold">Telegram Premium</CardTitle>
                      <CardDescription className="text-slate-600 font-medium">@helpdeskínova</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Business Hours */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-3 rounded-xl">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">Horário de Atendimento</CardTitle>
                </div>
                <CardContent className="p-0">
                  <div className="space-y-3 text-slate-700">
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="font-medium">Segunda a Sexta</span>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">8h às 18h</Badge>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="font-medium">Sábado</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">9h às 14h</Badge>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Domingo</span>
                      <Badge variant="outline" className="text-slate-500">Emergências</Badge>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>

            {/* Location */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-3 rounded-xl">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-slate-900">Centro Técnico</CardTitle>
                    <CardDescription className="text-slate-600">São Paulo - SP, Brasil</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-2xl bg-white">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-bold text-slate-900">Solicitar Consultoria</CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Preencha o formulário abaixo com detalhes sobre sua necessidade de suporte técnico.
                  Nossa equipe de especialistas responderá com uma proposta personalizada.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-slate-800 font-semibold text-base">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 text-base"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-slate-800 font-semibold text-base">
                        E-mail Corporativo *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@empresa.com"
                        className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-slate-800 font-semibold text-base">
                      Empresa / Organização
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                      className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 text-base"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-slate-800 font-semibold text-base">
                      Assunto *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Descreva brevemente o tipo de suporte necessário"
                      className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 text-base"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-slate-800 font-semibold text-base">
                      Descrição Detalhada *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Descreva detalhadamente sua necessidade técnica, problemas enfrentados, infraestrutura atual e objetivos..."
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 resize-none text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
