// ============================================================
// DARAWAT - Buyer Page Language System (No Selector)
// COMPLETE VERSION - LAHAT NG TRANSLATIONS
// ============================================================

class BuyerLanguageSystem {
    constructor() {
        this.currentLanguage = 'en';
        this.availableLanguages = ['en', 'fil', 'ceb', 'hil', 'war', 'bcl', 'kri'];
        this.translations = {};
        this.init();
    }

    init() {
        this.loadTranslations();
        
        const savedLang = localStorage.getItem('darawat-language');
        if (savedLang && this.availableLanguages.includes(savedLang)) {
            this.currentLanguage = savedLang;
        } else {
            this.currentLanguage = 'en';
        }
        
        this.applyTranslations();
        console.log(`Buyer Page Language: ${this.currentLanguage}`);
    }

    loadTranslations() {
        this.translations = {
            'en': {
                // ===== SUSPENDED =====
                'suspended_title': 'Account Suspended',
                'suspended_reason': 'Reason',
                'suspended_duration': 'Duration',
                'suspended_on': 'Suspended On',
                'suspended_ends': 'Ends On',
                'suspended_notes': 'Notes',
                'suspended_contact': 'If you believe this is a mistake, please contact our support team.',
                'suspended_info': 'For more information, please reach out to support.',
                'suspended_logout': 'Logout',
                
                // ===== LOGIN =====
                'login_title': 'Login',
                'login_subtitle': 'Access your buyer dashboard',
                'login_email_label': 'Username or Email',
                'login_email_placeholder': 'Enter your email',
                'login_password_label': 'Password',
                'login_password_placeholder': 'Enter your password',
                'login_remember_me': 'Remember me',
                'login_button': 'Login to Dashboard',
                'login_no_account': "Don't have an account?",
                'login_register_link': 'Register here',
                
                // ===== REGISTER =====
                'register_title': 'Register as Buyer',
                'register_subtitle': 'Create your buyer account',
                'register_name_label': 'Full Name',
                'register_name_placeholder': 'Enter your full name',
                'register_email_label': 'Email Address',
                'register_email_placeholder': 'Enter your email',
                'register_password_label': 'Password',
                'register_password_placeholder': 'Create a password',
                'register_address_label': 'Address',
                'register_address_placeholder': 'Enter your address',
                'register_terms_agreement': 'I agree to the',
                'register_terms_link': 'DARAWAT Terms and Agreement',
                'register_button': 'Register & Login',
                'register_have_account': 'Already have an account?',
                'register_login_link': 'Login here',
                
                // ===== OTP =====
                'otp_title': 'Verify Your Identity',
                'otp_subtitle': "We've sent a 6-digit verification code to your email address.",
                'otp_verify_button': 'Verify',
                'otp_resend_button': 'Resend Code',
                'otp_cancel_button': 'Cancel',
                'otp_toast_label': 'Your verification code',
                'otp_toast_enter': 'Enter this code in the fields above',
                'otp_copy_code': 'Copy Code',
                'otp_copied': 'Copied!',
                
                // ===== TERMS =====
                'terms_title': 'DARAWAT Terms and Agreement',
                'terms_accept': 'I Accept',
                'terms_close': 'Close',
                
                // ===== DASHBOARD NAV =====
                'dashboard_nav_dashboard': 'Dashboard',
                'dashboard_nav_sellers': 'All Sellers',
                'dashboard_nav_messages': 'Messages',
                'dashboard_nav_profile': 'Profile',
                'dashboard_nav_saved': 'Saved',
                'welcome_message': 'Welcome',
                
                // ===== NEARBY FARMS =====
                'nearby_banner_text': 'Discover farms near you – find local produce and connect with farmers in your area',
                'nearby_btn_view': 'View Nearby Farms',
                'nearby_btn_all': 'All Sellers',
                
                // ===== PROMOTIONS =====
                'promo_btn_text': 'View Latest Promotions & Updates',
                'promo_hide_text': 'Hide Promotions',
                'promo_section_title': 'Latest Promotions & Updates',
                
                // ===== DISCOUNT =====
                'discount_btn_text': 'Have a discount code?',
                'discount_hide_text': 'Hide discount code',
                'discount_placeholder': 'Enter discount code...',
                'discount_apply': 'Apply Code',
                
                // ===== SEARCH =====
                'search_placeholder': 'Search for products...',
                'search_button': 'Search',
                
                // ===== CATEGORIES =====
                'category_all': 'All Products',
                'category_vegetables': 'Vegetables',
                'category_fruits': 'Fruits',
                'category_grains': 'Grains',
                'category_livestock': 'Livestock',
                'category_dairy': 'Dairy',
                
                // ===== PRODUCTS =====
                'products_title': 'Available Products',
                'no_products': 'No products available. Check back later or sellers haven\'t added any products yet.',
                'product_out_of_stock': 'Out of Stock',
                'product_buy_now': 'Buy Now',
                'product_view_details': 'View Details',
                'product_available': 'Available',
                'product_reviews': 'reviews',
                'product_no_reviews': 'No reviews yet. Be the first to review this product!',
                'product_rating': 'Rate this Product',
                'product_write_review': 'Write your review...',
                'product_submit_review': 'Submit Review',
                'product_customer_reviews': 'Customer Reviews',
                'product_message_seller': 'Message Seller',
                'product_type_message': 'Type your message to the seller...',
                'product_send_message': 'Send Message',
                'product_send_feedback': 'Send Feedback',
                'product_feedback_type': 'Select Feedback Type',
                'product_feedback_suggestion': 'Suggestion',
                'product_feedback_issue': 'Report Issue',
                'product_feedback_compliment': 'Compliment',
                'product_feedback_other': 'Other',
                'product_feedback_placeholder': 'Describe your feedback...',
                'product_submit_feedback': 'Submit Feedback',
                
                // ===== QUANTITY =====
                'quantity_label': 'Qty',
                
                // ===== BLOCKCHAIN =====
                'blockchain_notice': 'All purchases will be processed through our secure blockchain system to ensure transparency and security for both buyers and farmers.',
                
                // ===== NEWSLETTER =====
                'newsletter_title': 'Subscribe to our Newsletter',
                'newsletter_subtitle': 'Get updates on new products and special offers!',
                'newsletter_placeholder': 'Enter your email address',
                'newsletter_subscribe': 'Subscribe',
                
                // ===== FOOTER =====
                'footer_copyright': 'DARAWAT © 2026 - Connecting Farmers and Buyers',
                'footer_farmai': 'Ask FarmAI for Help',
                'footer_help_center': 'Help Center',
                'footer_success_stories': 'Success Stories',
                'footer_guidelines': 'Guidelines'
            },
            'fil': {
                // ===== SUSPENDED =====
                'suspended_title': 'Nasuspinde ang Account',
                'suspended_reason': 'Dahilan',
                'suspended_duration': 'Tagal',
                'suspended_on': 'Na-suspend Noong',
                'suspended_ends': 'Magtatapos Sa',
                'suspended_notes': 'Mga Tala',
                'suspended_contact': 'Kung naniniwala kang ito ay pagkakamali, makipag-ugnayan sa support.',
                'suspended_info': 'Para sa karagdagang impormasyon, makipag-ugnayan sa support.',
                'suspended_logout': 'Mag-logout',
                
                // ===== LOGIN =====
                'login_title': 'Mag-login',
                'login_subtitle': 'I-access ang iyong buyer dashboard',
                'login_email_label': 'Username o Email',
                'login_email_placeholder': 'Ilagay ang iyong email',
                'login_password_label': 'Password',
                'login_password_placeholder': 'Ilagay ang iyong password',
                'login_remember_me': 'Tandaan ako',
                'login_button': 'Mag-login sa Dashboard',
                'login_no_account': 'Wala kang account?',
                'login_register_link': 'Mag-rehistro dito',
                
                // ===== REGISTER =====
                'register_title': 'Mag-rehistro bilang Mamimili',
                'register_subtitle': 'Gumawa ng iyong buyer account',
                'register_name_label': 'Buong Pangalan',
                'register_name_placeholder': 'Ilagay ang iyong buong pangalan',
                'register_email_label': 'Email Address',
                'register_email_placeholder': 'Ilagay ang iyong email',
                'register_password_label': 'Password',
                'register_password_placeholder': 'Gumawa ng password',
                'register_address_label': 'Address',
                'register_address_placeholder': 'Ilagay ang iyong address',
                'register_terms_agreement': 'Sumasang-ayon ako sa',
                'register_terms_link': 'DARAWAT Terms and Agreement',
                'register_button': 'Mag-rehistro at Mag-login',
                'register_have_account': 'May account ka na?',
                'register_login_link': 'Mag-login dito',
                
                // ===== OTP =====
                'otp_title': 'I-verify ang Iyong Pagkakakilanlan',
                'otp_subtitle': 'Nagpadala kami ng 6-digit verification code sa iyong email address.',
                'otp_verify_button': 'I-verify',
                'otp_resend_button': 'Magpadala muli',
                'otp_cancel_button': 'Kanselahin',
                'otp_toast_label': 'Ang iyong verification code',
                'otp_toast_enter': 'Ilagay ang code na ito sa mga field sa itaas',
                'otp_copy_code': 'Kopyahin ang Code',
                'otp_copied': 'Nakopya!',
                
                // ===== TERMS =====
                'terms_title': 'DARAWAT Terms and Agreement',
                'terms_accept': 'Tinatanggap ko',
                'terms_close': 'Isara',
                
                // ===== DASHBOARD NAV =====
                'dashboard_nav_dashboard': 'Dashboard',
                'dashboard_nav_sellers': 'Lahat ng Nagbebenta',
                'dashboard_nav_messages': 'Mga Mensahe',
                'dashboard_nav_profile': 'Profile',
                'dashboard_nav_saved': 'Naka-save',
                'welcome_message': 'Maligayang pagdating',
                
                // ===== NEARBY FARMS =====
                'nearby_banner_text': 'Tuklasin ang mga bukid malapit sa iyo – humanap ng lokal na ani at kumonekta sa mga magsasaka sa iyong lugar',
                'nearby_btn_view': 'Tingnan ang Mga Kalapit na Bukid',
                'nearby_btn_all': 'Lahat ng Nagbebenta',
                
                // ===== PROMOTIONS =====
                'promo_btn_text': 'Tingnan ang Mga Pinakabagong Promosyon at Update',
                'promo_hide_text': 'Itago ang Mga Promosyon',
                'promo_section_title': 'Mga Pinakabagong Promosyon at Update',
                
                // ===== DISCOUNT =====
                'discount_btn_text': 'May discount code ka ba?',
                'discount_hide_text': 'Itago ang discount code',
                'discount_placeholder': 'Ilagay ang discount code...',
                'discount_apply': 'Ilapat ang Code',
                
                // ===== SEARCH =====
                'search_placeholder': 'Maghanap ng mga produkto...',
                'search_button': 'Maghanap',
                
                // ===== CATEGORIES =====
                'category_all': 'Lahat ng Produkto',
                'category_vegetables': 'Mga Gulay',
                'category_fruits': 'Mga Prutas',
                'category_grains': 'Mga Butil',
                'category_livestock': 'Mga Alagang Hayop',
                'category_dairy': 'Mga Produktong Gatas',
                
                // ===== PRODUCTS =====
                'products_title': 'Mga Available na Produkto',
                'no_products': 'Walang available na produkto. Bumalik sa ibang pagkakataon o wala pang produkto ang mga nagbebenta.',
                'product_out_of_stock': 'Wala nang Stock',
                'product_buy_now': 'Bilhin Na',
                'product_view_details': 'Tingnan ang Detalye',
                'product_available': 'Available',
                'product_reviews': 'mga review',
                'product_no_reviews': 'Wala pang review. Ikaw na ang unang mag-review ng produktong ito!',
                'product_rating': 'I-rate ang Produktong Ito',
                'product_write_review': 'Isulat ang iyong review...',
                'product_submit_review': 'Ipasa ang Review',
                'product_customer_reviews': 'Mga Review ng Customer',
                'product_message_seller': 'Mag-mensahe sa Nagbebenta',
                'product_type_message': 'I-type ang iyong mensahe sa nagbebenta...',
                'product_send_message': 'Magpadala ng Mensahe',
                'product_send_feedback': 'Magpadala ng Feedback',
                'product_feedback_type': 'Pumili ng Uri ng Feedback',
                'product_feedback_suggestion': 'Mungkahi',
                'product_feedback_issue': 'Mag-ulat ng Isyu',
                'product_feedback_compliment': 'Papuri',
                'product_feedback_other': 'Iba pa',
                'product_feedback_placeholder': 'Ilarawan ang iyong feedback...',
                'product_submit_feedback': 'Ipasa ang Feedback',
                
                // ===== QUANTITY =====
                'quantity_label': 'Dami',
                
                // ===== BLOCKCHAIN =====
                'blockchain_notice': 'Ang lahat ng pagbili ay ipoproseso sa pamamagitan ng aming secure na blockchain system upang matiyak ang transparency at seguridad para sa parehong mga mamimili at magsasaka.',
                
                // ===== NEWSLETTER =====
                'newsletter_title': 'Mag-subscribe sa aming Newsletter',
                'newsletter_subtitle': 'Tumanggap ng mga update sa mga bagong produkto at espesyal na alok!',
                'newsletter_placeholder': 'Ilagay ang iyong email address',
                'newsletter_subscribe': 'Mag-subscribe',
                
                // ===== FOOTER =====
                'footer_copyright': 'DARAWAT © 2026 - Nag-uugnay sa mga Magsasaka at Mamimili',
                'footer_farmai': 'Magtanong sa FarmAI para sa Tulong',
                'footer_help_center': 'Sentro ng Tulong',
                'footer_success_stories': 'Mga Kwento ng Tagumpay',
                'footer_guidelines': 'Mga Alituntunin'
            },
            'ceb': {
                // ===== SUSPENDED =====
                'suspended_title': 'Gisuspinde ang Account',
                'suspended_reason': 'Rason',
                'suspended_duration': 'Kadugayon',
                'suspended_on': 'Gisuspinde Kaniadtong',
                'suspended_ends': 'Matapos Sa',
                'suspended_notes': 'Mga Tala',
                'suspended_contact': 'Kung nagtuo ka nga kini sayop, kontaka ang support team.',
                'suspended_info': 'Alang sa dugang nga impormasyon, kontaka ang support.',
                'suspended_logout': 'Pag-logout',
                
                // ===== LOGIN =====
                'login_title': 'Pag-login',
                'login_subtitle': 'Pag-access sa imong buyer dashboard',
                'login_email_label': 'Username o Email',
                'login_email_placeholder': 'Ibutang ang imong email',
                'login_password_label': 'Password',
                'login_password_placeholder': 'Ibutang ang imong password',
                'login_remember_me': 'Hinumdumi ko',
                'login_button': 'Pag-login sa Dashboard',
                'login_no_account': 'Wala kay account?',
                'login_register_link': 'Mag-rehistro diri',
                
                // ===== REGISTER =====
                'register_title': 'Mag-rehistro isip Mamalitay',
                'register_subtitle': 'Paghimo og buyer account',
                'register_name_label': 'Tibuok Ngalan',
                'register_name_placeholder': 'Ibutang ang imong tibuok ngalan',
                'register_email_label': 'Email Address',
                'register_email_placeholder': 'Ibutang ang imong email',
                'register_password_label': 'Password',
                'register_password_placeholder': 'Paghimo og password',
                'register_address_label': 'Address',
                'register_address_placeholder': 'Ibutang ang imong address',
                'register_terms_agreement': 'Mouyon ko sa',
                'register_terms_link': 'DARAWAT Terms and Agreement',
                'register_button': 'Mag-rehistro ug Pag-login',
                'register_have_account': 'Naay ka nay account?',
                'register_login_link': 'Pag-login diri',
                
                // ===== OTP =====
                'otp_title': 'I-verify ang Imong Pagkatawo',
                'otp_subtitle': 'Nagpadala mi og 6-digit verification code sa imong email address.',
                'otp_verify_button': 'I-verify',
                'otp_resend_button': 'Pagpadala pag-usab',
                'otp_cancel_button': 'Kanselahon',
                'otp_toast_label': 'Ang imong verification code',
                'otp_toast_enter': 'Ibutang kini nga code sa mga field sa ibabaw',
                'otp_copy_code': 'Kopyaha ang Code',
                'otp_copied': 'Nakopya!',
                
                // ===== TERMS =====
                'terms_title': 'DARAWAT Terms and Agreement',
                'terms_accept': 'Gidawat nako',
                'terms_close': 'Isira',
                
                // ===== DASHBOARD NAV =====
                'dashboard_nav_dashboard': 'Dashboard',
                'dashboard_nav_sellers': 'Tanang Namaligya',
                'dashboard_nav_messages': 'Mga Mensahe',
                'dashboard_nav_profile': 'Profile',
                'dashboard_nav_saved': 'Na-save',
                'welcome_message': 'Maayong pag-abot',
                
                // ===== NEARBY FARMS =====
                'nearby_banner_text': 'Diskubrehi ang mga uma duol kanimo – pangitaa ang lokal nga produkto ug makonekta sa mga mag-uuma sa imong lugar',
                'nearby_btn_view': 'Tan-awa ang mga Duol nga Uma',
                'nearby_btn_all': 'Tanang Namaligya',
                
                // ===== PROMOTIONS =====
                'promo_btn_text': 'Tan-awa ang Pinakabag-o nga mga Promosyon ug Update',
                'promo_hide_text': 'Itago ang mga Promosyon',
                'promo_section_title': 'Pinakabag-o nga mga Promosyon ug Update',
                
                // ===== DISCOUNT =====
                'discount_btn_text': 'Naay ka discount code?',
                'discount_hide_text': 'Itago ang discount code',
                'discount_placeholder': 'Ibutang ang discount code...',
                'discount_apply': 'I-apply ang Code',
                
                // ===== SEARCH =====
                'search_placeholder': 'Pangitaa ang mga produkto...',
                'search_button': 'Pangitaa',
                
                // ===== CATEGORIES =====
                'category_all': 'Tanang Produkto',
                'category_vegetables': 'Mga Utanon',
                'category_fruits': 'Mga Prutas',
                'category_grains': 'Mga Lugas',
                'category_livestock': 'Mga Hayop',
                'category_dairy': 'Mga Produkto sa Gatas',
                
                // ===== PRODUCTS =====
                'products_title': 'Mga Available nga Produkto',
                'no_products': 'Walay available nga produkto. Balik sa laing panahon o wala pay produkto ang mga namaligya.',
                'product_out_of_stock': 'Wala nay Stock',
                'product_buy_now': 'Paliton Na',
                'product_view_details': 'Tan-awa ang Detalye',
                'product_available': 'Available',
                'product_reviews': 'mga review',
                'product_no_reviews': 'Wala pay review. Ikaw na ang una nga mag-review niini nga produkto!',
                'product_rating': 'I-rate Kini nga Produkto',
                'product_write_review': 'Isulat ang imong review...',
                'product_submit_review': 'I-submit ang Review',
                'product_customer_reviews': 'Mga Review sa Customer',
                'product_message_seller': 'Mensahe sa Namaligya',
                'product_type_message': 'I-type ang imong mensahe sa namaligya...',
                'product_send_message': 'Magpadala og Mensahe',
                'product_send_feedback': 'Magpadala og Feedback',
                'product_feedback_type': 'Pilia ang Uri sa Feedback',
                'product_feedback_suggestion': 'Sugyot',
                'product_feedback_issue': 'Pag-report og Isyu',
                'product_feedback_compliment': 'Pagdayeg',
                'product_feedback_other': 'Ubang pa',
                'product_feedback_placeholder': 'Ihulagway ang imong feedback...',
                'product_submit_feedback': 'I-submit ang Feedback',
                
                // ===== QUANTITY =====
                'quantity_label': 'Gidaghanon',
                
                // ===== BLOCKCHAIN =====
                'blockchain_notice': 'Ang tanang pagpalit iproseso pinaagi sa among secure nga blockchain system aron masiguro ang transparency ug seguridad alang sa mga mamalitay ug mag-uuma.',
                
                // ===== NEWSLETTER =====
                'newsletter_title': 'Mag-subscribe sa among Newsletter',
                'newsletter_subtitle': 'Makadawat og mga update sa bag-ong produkto ug espesyal nga alok!',
                'newsletter_placeholder': 'Ibutang ang imong email address',
                'newsletter_subscribe': 'Mag-subscribe',
                
                // ===== FOOTER =====
                'footer_copyright': 'DARAWAT © 2026 - Nagkonekta sa mga Mag-uuma ug Mamalitay',
                'footer_farmai': 'Pangutana sa FarmAI alang sa Tabang',
                'footer_help_center': 'Sentro sa Tabang',
                'footer_success_stories': 'Mga Istorya sa Kalampusan',
                'footer_guidelines': 'Mga Giya'
            }
        };
    }

    getTranslation(key) {
        const lang = this.currentLanguage;
        if (this.translations[lang] && this.translations[lang][key] !== undefined) {
            return this.translations[lang][key];
        }
        if (this.translations.en && this.translations.en[key] !== undefined) {
            return this.translations.en[key];
        }
        return key;
    }

    applyTranslations() {
        // Handle regular text elements
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            el.textContent = translation;
        });

        // Handle placeholder attributes
        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            const translation = this.getTranslation(key);
            if (el.placeholder !== undefined) {
                el.placeholder = translation;
            }
        });

        // Handle input values (buttons, submit)
        document.querySelectorAll('input[data-translate-value]').forEach(el => {
            const key = el.getAttribute('data-translate-value');
            const translation = this.getTranslation(key);
            if (el.type === 'submit' || el.type === 'button') {
                el.value = translation;
            }
        });

        console.log(`Translations applied for: ${this.currentLanguage}`);
    }
}

// Initialize
let buyerLanguageSystem;
document.addEventListener('DOMContentLoaded', function() {
    buyerLanguageSystem = new BuyerLanguageSystem();
    window.buyerLanguageSystem = buyerLanguageSystem;
});