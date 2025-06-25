
'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Instagram, ExternalLink, Linkedin, Facebook } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Serviços Especializados',
		links: [
			{ title: 'Suporte HelpDesk', href: '#services' },
			{ title: 'Câmeras de Segurança', href: '#services' },
			{ title: 'Sistema Failover', href: '#services' },
			{ title: 'Redes de Computadores', href: '#services' },
			{ title: 'Segurança Cibernética', href: '#services' },
		],
	},
	{
		label: 'Acesso Rápido',
		links: [
			{ title: 'Página Inicial', href: '#home' },
			{ title: 'Nossos Serviços', href: '#services' },
			{ title: 'Artigos e Soluções', href: '#tutorials' },
			{ title: 'Contato', href: '#contact' },
			{ title: 'Portal do Cliente', href: '#' },
		],
	},
	{
		label: 'Informações',
		links: [
			{ title: 'Termos de Uso', href: '#' },
			{ title: 'Privacidade', href: '#' },
			{ title: 'Política de Qualidade', href: '#' },
			{ title: 'Certificações', href: '#' },
		],
	},
	{
		label: 'Redes Sociais',
		links: [
			{ 
				title: 'Facebook', 
				href: 'https://www.facebook.com/helpdeskinova', 
				icon: Facebook 
			},
			{ 
				title: 'Instagram', 
				href: 'https://www.instagram.com/helpdeskinova/', 
				icon: Instagram 
			},
			{ 
				title: 'LinkedIn', 
				href: 'https://www.linkedin.com/company/helpdeskinova/', 
				icon: Linkedin 
			},
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full bg-gradient-to-b from-slate-900 to-slate-950 text-white flex flex-col items-center justify-center rounded-t-4xl border-t border-slate-800 px-6 py-12 lg:py-16">
			<div className="bg-slate-400/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="container mx-auto max-w-7xl">
				<div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-16">
					{/* Company Info Section */}
					<AnimatedContainer className="space-y-6 xl:col-span-1">
						<div className="flex items-center mb-6">
							<img 
								src="/helpdesk-uploads/4c067a97-598f-4049-8a54-72735b77f986.png" 
								alt="Help Desk Inova" 
								className="h-12 w-auto brightness-0 invert"
							/>
						</div>
						
						<p className="text-slate-300 text-sm leading-relaxed max-w-md">
							A HELP DESK INOVA é especialista em soluções tecnológicas para empresas, 
							oferecendo suporte HelpDesk, gerenciamento de redes, e segurança cibernética. 
							Com uma equipe qualificada e valores justos, garantimos eficiência e inovação 
							para o crescimento seguro do seu negócio.
						</p>

						{/* Contact Info */}
						<div className="space-y-4 pt-4">
							<div className="flex items-center space-x-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800">
									<Phone className="h-4 w-4 text-emerald-400" />
								</div>
								<div>
									<p className="text-xs text-slate-400">Suporte Especializado</p>
									<p className="text-sm text-white">+55 (21) 99131-8034</p>
								</div>
							</div>
							
							<div className="flex items-center space-x-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800">
									<Mail className="h-4 w-4 text-blue-400" />
								</div>
								<div>
									<p className="text-xs text-slate-400">E-mail Corporativo</p>
									<p className="text-sm text-white">suporte@helpdeskinova.com.br</p>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex space-x-4 pt-4">
							<a 
								href="mailto:suporte@helpdeskinova.com.br" 
								className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 hover:bg-blue-600 transition-all duration-300"
								aria-label="Enviar e-mail"
							>
								<Mail className="h-4 w-4 text-blue-400 group-hover:text-white transition-colors" />
							</a>
							<a 
								href="https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0" 
								className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 hover:bg-emerald-600 transition-all duration-300"
								aria-label="WhatsApp"
							>
								<MessageSquare className="h-4 w-4 text-slate-300 group-hover:text-white transition-colors" />
							</a>
							<a 
								href="https://www.instagram.com/helpdeskinova/" 
								className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 hover:bg-violet-600 transition-all duration-300"
								aria-label="Instagram"
							>
								<Instagram className="h-4 w-4 text-slate-300 group-hover:text-white transition-colors" />
							</a>
							<a 
								href="https://www.linkedin.com/company/helpdeskinova/" 
								className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 hover:bg-blue-700 transition-all duration-300"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-4 w-4 text-slate-300 group-hover:text-white transition-colors" />
							</a>
							<a 
								href="https://www.facebook.com/helpdeskinova" 
								className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 hover:bg-blue-600 transition-all duration-300"
								aria-label="Facebook"
							>
								<Facebook className="h-4 w-4 text-slate-300 group-hover:text-white transition-colors" />
							</a>
						</div>

						<p className="text-slate-400 text-xs pt-6">
							© {new Date().getFullYear()} Help Desk Inova. Todos os direitos reservados.
						</p>
					</AnimatedContainer>

					{/* Links Sections */}
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:grid-cols-4">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div className="space-y-4">
									<h3 className="text-sm font-semibold text-white">{section.label}</h3>
									<ul className="space-y-3">
										{section.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													className="group flex items-center text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm"
												>
													{link.icon && <link.icon className="me-2 size-4" />}
													<span>{link.title}</span>
													{!link.icon && (
														<ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
													)}
												</a>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>

				{/* Bottom Bar */}
				<AnimatedContainer delay={0.6} className="border-t border-slate-800 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-slate-400 text-center md:text-left text-sm">
							Desenvolvido com tecnologia e inovação para impulsionar seu negócio.
						</p>
						<div className="flex items-center space-x-6 text-slate-400 text-xs">
							<span>Atendimento 24/7</span>
							<span>•</span>
							<span>Suporte Especializado</span>
						</div>
					</div>
				</AnimatedContainer>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', y: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
