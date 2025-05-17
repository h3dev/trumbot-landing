import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "hero.title": "Your Vision, Our Digital Universe",
          "hero.subtitle": "Crafting exceptional web applications and intelligent bots for Discord and Telegram",
          "nav.services": "Services",
          "nav.packages": "Packages",
          "nav.contact": "Contact",
          "services.title": "Our Services",
          "services.web.title": "Web Applications",
          "services.web.desc": "Custom-built, responsive web applications that deliver exceptional user experiences",
          "services.discord.title": "Discord Bots",
          "services.discord.desc": "Intelligent Discord bots that enhance server management and user engagement",
          "services.telegram.title": "Telegram Bots",
          "services.telegram.desc": "Automated Telegram solutions for business and community management",
          "packages.title": "Choose Your Package",
          "packages.starter.title": "Starter",
          "packages.starter.desc": "Perfect for small projects and basic automation",
          "packages.starter.features.1": "Basic Web Application",
          "packages.starter.features.2": "Simple Bot Commands",
          "packages.starter.features.3": "24/7 Uptime",
          "packages.pro.title": "Professional",
          "packages.pro.desc": "Advanced features for growing businesses",
          "packages.pro.features.1": "Advanced Web Application",
          "packages.pro.features.2": "Custom Bot Features",
          "packages.pro.features.3": "Analytics Dashboard",
          "packages.pro.features.4": "Priority Support",
          "packages.enterprise.title": "Enterprise",
          "packages.enterprise.desc": "Custom solutions for large organizations",
          "packages.enterprise.features.1": "Custom Development",
          "packages.enterprise.features.2": "Multiple Bots Integration",
          "packages.enterprise.features.3": "Dedicated Support Team",
          "packages.enterprise.features.4": "Custom SLA",
          "contact.title": "Get in Touch",
          "contact.email": "Email",
          "contact.telegram": "Telegram",
          "contact.telegram.desc": "Join our channel",
          "contact.facebook": "Facebook",
          "contact.facebook.desc": "Follow us for updates",
          "cta.explore": "Explore Packages",
          "cta.getStarted": "Get Started",
          "cta.getInTouch": "Get in Touch",
          "cta.contactUs": "Contact Us"
        }
      },
      vi: {
        translation: {
          "hero.title": "Tầm Nhìn Của Bạn, Vũ Trụ Số Của Chúng Tôi",
          "hero.subtitle": "Thiết kế ứng dụng web và bot thông minh cho Discord và Telegram",
          "nav.services": "Dịch Vụ",
          "nav.packages": "Gói Dịch Vụ",
          "nav.contact": "Liên Hệ",
          "services.title": "Dịch Vụ Của Chúng Tôi",
          "services.web.title": "Ứng Dụng Web",
          "services.web.desc": "Ứng dụng web tùy chỉnh, đáp ứng mang lại trải nghiệm người dùng tuyệt vời",
          "services.discord.title": "Bot Discord",
          "services.discord.desc": "Bot Discord thông minh nâng cao quản lý máy chủ và tương tác người dùng",
          "services.telegram.title": "Bot Telegram",
          "services.telegram.desc": "Giải pháp Telegram tự động cho quản lý doanh nghiệp và cộng đồng",
          "packages.title": "Chọn Gói Dịch Vụ",
          "packages.starter.title": "Cơ Bản",
          "packages.starter.desc": "Hoàn hảo cho dự án nhỏ và tự động hóa cơ bản",
          "packages.starter.features.1": "Ứng Dụng Web Cơ Bản",
          "packages.starter.features.2": "Lệnh Bot Đơn Giản",
          "packages.starter.features.3": "Hoạt Động 24/7",
          "packages.pro.title": "Chuyên Nghiệp",
          "packages.pro.desc": "Tính năng nâng cao cho doanh nghiệp đang phát triển",
          "packages.pro.features.1": "Ứng Dụng Web Nâng Cao",
          "packages.pro.features.2": "Tính Năng Bot Tùy Chỉnh",
          "packages.pro.features.3": "Bảng Điều Khiển Phân Tích",
          "packages.pro.features.4": "Hỗ Trợ Ưu Tiên",
          "packages.enterprise.title": "Doanh Nghiệp",
          "packages.enterprise.desc": "Giải pháp tùy chỉnh cho tổ chức lớn",
          "packages.enterprise.features.1": "Phát Triển Tùy Chỉnh",
          "packages.enterprise.features.2": "Tích Hợp Nhiều Bot",
          "packages.enterprise.features.3": "Đội Ngũ Hỗ Trợ Riêng",
          "packages.enterprise.features.4": "SLA Tùy Chỉnh",
          "contact.title": "Liên Hệ",
          "contact.email": "Email",
          "contact.telegram": "Telegram",
          "contact.telegram.desc": "Tham gia kênh của chúng tôi",
          "contact.facebook": "Facebook",
          "contact.facebook.desc": "Theo dõi để cập nhật",
          "cta.explore": "Khám Phá Gói Dịch Vụ",
          "cta.getStarted": "Bắt Đầu Ngay",
          "cta.getInTouch": "Liên Hệ Ngay",
          "cta.contactUs": "Liên Hệ"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;