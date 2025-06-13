
import { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    
    // Simulação de envio do formulário
    console.log('Formulário enviado:', formData);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe entrará em contato em breve. Obrigado!",
    });
    
    // Resetar formulário
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Precisa de suporte técnico? Entre em contato conosco e nossa equipe especializada 
            oferecerá a solução mais adequada para suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informações de Contato */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-slate-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-900">E-mail</CardTitle>
                      <CardDescription className="text-slate-600">suporte@helpdeskìnova.com</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-900">WhatsApp</CardTitle>
                      <CardDescription className="text-slate-600">+55 (11) 99999-9999</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-900">Telegram</CardTitle>
                      <CardDescription className="text-slate-600">@helpdeskìnova</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <div className="bg-slate-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-slate-900 mb-3">Horário de Atendimento</h3>
                <div className="space-y-1 text-sm text-slate-600">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Envie sua Mensagem</CardTitle>
                <CardDescription className="text-slate-600">
                  Preencha o formulário abaixo com detalhes sobre sua necessidade de suporte.
                  Nossa equipe responderá em breve.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">
                        Nome Completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="border-gray-300 focus:border-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                        className="border-gray-300 focus:border-slate-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-700 font-medium">
                      Assunto
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Descreva brevemente o problema ou dúvida"
                      className="border-gray-300 focus:border-slate-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Descreva detalhadamente sua dúvida ou problema técnico..."
                      className="border-gray-300 focus:border-slate-500 resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
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
