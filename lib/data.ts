import { 
  ShieldCheck, 
  Globe, 
  Clock, 
  Users, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  Plane,
  Languages,
  FileCheck,
  Headset,
  SearchCheck,
  Handshake,
  Mail,
  PenTool
} from 'lucide-react';
import { ContentData } from '../types';

export const arabicContent: ContentData = {
  nav: {
    links: [
      { label: 'الرئيسية', href: '#home' },
      { label: 'عن المكتب', href: '#about' },
      { label: 'خدماتنا', href: '#services' },
      { label: 'آلية العمل', href: '#process' },
      { label: 'شركاؤنا', href: '#partners' },
      { label: 'تواصل معنا', href: '#contact' },
    ],
    cta: 'طلب عرض سعر'
  },
  hero: {
    title: 'شريكك اللغوي الموثوق في اليمن وحول العالم',
    subtitle: 'نقدم خدمات ترجمة معتمدة لدى جميع السفارات والهيئات الحكومية والمنظمات الدولية منذ عام 2016.',
    badges: ['معتمدون من وزارة الثقافة', 'معترف بنا من اليونسكو']
  },
  stats: [
    { value: '+8', label: 'سنوات من الخبرة', icon: Clock },
    { value: '+11', label: 'مترجم معتمد', icon: Users },
    { value: '+5', label: 'لغات عالمية', icon: Globe },
    { value: '24/7', label: 'خدمة عملاء', icon: Headset },
  ],
  services: {
    categories: [
      {
        title: 'خدمات الترجمة المتخصصة',
        items: [
          { title: 'الترجمة القانونية', description: 'عقود، اتفاقيات، ووثائق رسمية.', icon: ShieldCheck },
          { title: 'الترجمة الطبية', description: 'تقارير طبية، وصفات، وأبحاث.', icon: Stethoscope },
          { title: 'الترجمة التقنية', description: 'أدلة مستخدم، ومواصفات هندسية.', icon: Briefcase },
          { title: 'الترجمة المالية', description: 'تقارير بنكية وميزانيات.', icon: FileText },
          { title: 'تعريب المواقع', description: 'ترجمة البرمجيات والمواقع الإلكترونية.', icon: Globe },
          { title: 'الترجمة الفورية', description: 'للمؤتمرات والاجتماعات.', icon: Languages },
        ]
      },
      {
        title: 'الخدمات الخاصة والعامة',
        items: [
          { title: 'الهجرة العشوائية', description: 'التقديم للوتري الأمريكي ومتابعة الإجراءات.', icon: Plane },
          { title: 'المنح الدراسية', description: 'التقديم للمنح في الصين، تركيا، والمجر.', icon: GraduationCap },
          { title: 'العلاج في الخارج', description: 'تنسيق السفر للعلاج في الهند.', icon: Stethoscope },
          { title: 'إصدار الوثائق', description: 'ترجمة وتجهيز الجوازات والشهادات.', icon: FileCheck },
          { title: 'الحج والعمرة', description: 'معاملات وحجوزات الطيران.', icon: Globe },
          { title: 'تأشيرات الفيزا', description: 'تعبئة استمارات الفيزا لأمريكا وغيرها.', icon: FileText },
        ]
      },
      {
        title: 'الخدمات الأكاديمية',
        items: [
          { title: 'التدقيق اللغوي', description: 'مراجعة الرسائل العلمية والأبحاث.', icon: PenTool },
          { title: 'إعداد المقترحات', description: 'تجهيز مقترحات الماجستير والدكتوراه.', icon: FileText },
        ]
      }
    ]
  },
  process: {
    title: 'مراحل الترجمة المعتمدة لدينا',
    steps: [
      { number: '01', title: 'الاستلام', description: 'استلام الوثائق عبر اليد، البريد، أو الواتساب.', icon: FileText },
      { number: '02', title: 'التكلفة', description: 'تحديد التكلفة وموعد التسليم بعد الدراسة.', icon: FileCheck },
      { number: '03', title: 'الإسناد', description: 'إسناد العمل لمترجم متخصص في المجال.', icon: Users },
      { number: '04', title: 'التنسيق', description: 'مراجعة النص لغوياً وتنسيق المحتوى.', icon: PenTool },
      { number: '05', title: 'الجودة', description: 'مراجعة نهائية لضمان الدقة وتطبيق الملاحظات.', icon: SearchCheck },
      { number: '06', title: 'التسليم', description: 'تسليم المشروع معتمد وموثق في الموعد.', icon: Handshake },
    ]
  },
  partners: {
    title: 'شركاء النجاح',
    list: [
      { name: 'السفارة الروسية', type: 'سفارة' },
      { name: 'منظمة GIZ الألمانية', type: 'منظمة دولية' },
      { name: 'منظمة أطباء بلا حدود', type: 'منظمة طبية' },
      { name: 'المفوضية السامية للأمم المتحدة (UNHCR)', type: 'منظمة أممية' },
      { name: 'بنك اليمن والكويت', type: 'قطاع مصرفي' },
      { name: 'منظمة كوردايد', type: 'منظمة دولية' },
      { name: 'شركة يمن أرمرد', type: 'قطاع خاص' },
      { name: 'منظمة War Child UK', type: 'منظمة دولية' },
    ]
  },
  contact: {
    address: 'صنعاء، اليمن',
    phone: ['77xxxxxxx', '01xxxxxx'],
    email: 'info@lisanalasr.com',
    whatsapp: '96777xxxxxxx' 
  }
};

// Simplified English fallback for demonstration of toggle structure
export const englishContent: ContentData = {
  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Partners', href: '#partners' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Get Quote'
  },
  hero: {
    title: 'Your Trusted Language Partner in Yemen & Globally',
    subtitle: 'Providing authorized translation services for embassies, government bodies, and international organizations since 2016.',
    badges: ['Ministry of Culture Licensed', 'UNESCO Recognized']
  },
  stats: [
    { value: '+8', label: 'Years Experience', icon: Clock },
    { value: '+11', label: 'Certified Translators', icon: Users },
    { value: '+5', label: 'Global Languages', icon: Globe },
    { value: '24/7', label: 'Customer Support', icon: Headset },
  ],
  services: {
    categories: [
      {
        title: 'Specialized Translation',
        items: [
          { title: 'Legal Translation', description: 'Contracts, agreements, and official docs.', icon: ShieldCheck },
          { title: 'Medical Translation', description: 'Reports, prescriptions, research.', icon: Stethoscope },
          { title: 'Technical Translation', description: 'Manuals and engineering specs.', icon: Briefcase },
          { title: 'Financial Translation', description: 'Bank reports and budgets.', icon: FileText },
          { title: 'Website Localization', description: 'Software and website translation.', icon: Globe },
          { title: 'Simultaneous Interpretation', description: 'For conferences and meetings.', icon: Languages },
        ]
      },
      {
        title: 'Special Services',
        items: [
          { title: 'US Visa Lottery', description: 'Registration and follow-up.', icon: Plane },
          { title: 'Study Abroad', description: 'Applications for China, Turkey, Hungary.', icon: GraduationCap },
          { title: 'Medical Tourism', description: 'Coordination for treatment in India.', icon: Stethoscope },
          { title: 'Document Issuance', description: 'Passport and certificate processing.', icon: FileCheck },
          { title: 'Hajj & Umrah', description: 'Booking and travel arrangements.', icon: Globe },
          { title: 'Visa Applications', description: 'Forms for US and other embassies.', icon: FileText },
        ]
      },
      {
        title: 'Academic Services',
        items: [
          { title: 'Proofreading', description: 'Thesis and research review.', icon: PenTool },
          { title: 'Research Proposals', description: 'Master and PhD proposal prep.', icon: FileText },
        ]
      }
    ]
  },
  process: {
    title: 'Our Translation Process',
    steps: [
      { number: '01', title: 'Receipt', description: 'Receive docs via hand, email, or WhatsApp.', icon: FileText },
      { number: '02', title: 'Costing', description: 'Determine cost and deadline.', icon: FileCheck },
      { number: '03', title: 'Assignment', description: 'Assign to a specialized translator.', icon: Users },
      { number: '04', title: 'Coordination', description: 'Linguistic review and formatting.', icon: PenTool },
      { number: '05', title: 'Quality', description: 'Final QA check.', icon: SearchCheck },
      { number: '06', title: 'Delivery', description: 'Deliver certified document on time.', icon: Handshake },
    ]
  },
  partners: {
    title: 'Partners in Success',
    list: [
      { name: 'Russian Embassy', type: 'Embassy' },
      { name: 'GIZ Germany', type: 'Intl Org' },
      { name: 'Doctors Without Borders', type: 'Medical Org' },
      { name: 'UNHCR', type: 'UN Agency' },
      { name: 'Yemen-Kuwait Bank', type: 'Banking' },
      { name: 'Cordaid', type: 'Intl Org' },
      { name: 'Yemen Armored', type: 'Private Sector' },
      { name: 'War Child UK', type: 'Intl Org' },
    ]
  },
  contact: {
    address: 'Sana\'a, Yemen',
    phone: ['77xxxxxxx', '01xxxxxx'],
    email: 'info@lisanalasr.com',
    whatsapp: '96777xxxxxxx'
  }
};