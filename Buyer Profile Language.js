// ============================================================
// DARAWAT - Buyer Profile Language System (No Selector)
// Complete Translations for Buyer Profile Page
// ============================================================

class BuyerProfileLanguageSystem {
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
        console.log(`Buyer Profile Language: ${this.currentLanguage}`);
    }

    loadTranslations() {
        this.translations = {
            'en': {
                // ===== HEADER =====
                'logo_text': 'DARAWAT',
                'welcome_message': 'Welcome',
                'logout_button': 'Logout',
                
                // ===== NAVIGATION =====
                'nav_back': 'Back',
                'nav_my_profile': 'My Profile',
                'nav_account_settings': 'Account Settings',
                'nav_order_history': 'Order History',
                
                // ===== PAGE HEADER =====
                'page_title': 'My Profile',
                'page_subtitle': 'Manage your account settings and preferences',
                
                // ===== SIDEBAR =====
                'change_photo': 'Change Photo',
                'orders_label': 'Orders',
                'farmers_label': 'Farmers',
                'rating_label': 'Rating',
                'menu_personal_info': 'Personal Information',
                'menu_preferences': 'Product Preferences',
                'menu_recent_orders': 'Recent Orders',
                'menu_saved_sellers': 'Saved Sellers',
                'browse_sellers': 'Browse Sellers',
                'my_saved_sellers': 'My Saved Sellers',
                'browse_categories': 'Browse Categories',
                'sell_products': 'Sell Products',
                
                // ===== PERSONAL INFO =====
                'personal_info_title': 'Personal Information',
                'first_name_label': 'First Name',
                'first_name_placeholder': 'Enter your first name',
                'last_name_label': 'Last Name',
                'last_name_placeholder': 'Enter your last name',
                'email_label': 'Email Address',
                'email_placeholder': 'Enter your email',
                'phone_label': 'Phone Number',
                'phone_placeholder': 'Enter your phone number',
                'address_label': 'Address',
                'address_placeholder': 'Enter your address',
                'bio_label': 'Bio',
                'bio_placeholder': 'Tell us about yourself...',
                'save_changes': 'Save Changes',
                'cancel': 'Cancel',
                'profile_updated': 'Profile updated successfully!',
                'discard_changes': 'Are you sure you want to discard changes?',
                
                // ===== PREFERENCES =====
                'preferences_title': 'Product Preferences',
                'preferences_subtitle': 'Select the types of products you\'re most interested in',
                'pref_vegetables': 'Vegetables',
                'pref_fruits': 'Fruits',
                'pref_grains': 'Grains',
                'pref_dairy': 'Dairy',
                'pref_livestock': 'Livestock',
                'pref_other': 'Other',
                'update_preferences': 'Update Preferences',
                'preferences_updated': 'Preferences updated successfully!',
                
                // ===== RECENT ORDERS =====
                'recent_orders_title': 'Recent Orders',
                'view_all_orders': 'View All Orders',
                'no_orders': 'You haven\'t placed any orders yet.',
                'no_orders_sub': 'Start shopping to see your order history here!',
                'order_placed': 'Placed on',
                'quantity_label': 'Quantity',
                'total_label': 'Total',
                'status_processing': 'Processing',
                'status_shipped': 'Shipped',
                'status_delivered': 'Delivered',
                'order_number': 'Order #',
                
                // ===== AVATAR MODAL =====
                'avatar_modal_title': 'Choose Your Profile Picture',
                'avatar_upload': 'Upload',
                'avatar_cancel': 'Cancel',
                'avatar_save': 'Save Avatar',
                'avatar_select': 'Please select an avatar or upload an image.',
                'avatar_updated': 'Buyer profile picture updated successfully!',
                
                // ===== LOGOUT =====
                'logout_confirm': 'Are you sure you want to log out?',
                
                // ===== FOOTER =====
                'footer_copyright': 'DARAWAT 2026 - Connecting Farmers and Buyers',
                'footer_privacy': 'Privacy Policy',
                'footer_terms': 'Terms of Service',
                'footer_contact': 'Contact Us',
                'footer_help': 'Help',
                
                // ===== EMPTY STATES =====
                'no_orders_empty': 'No orders found.',
                
                // ===== ALERTS =====
                'login_required': 'Please log in to access your profile.',
                'profile_saved': 'Profile saved successfully!',
                'preferences_saved': 'Preferences saved successfully!'
            },
            'fil': {
                // ===== HEADER =====
                'logo_text': 'DARAWAT',
                'welcome_message': 'Maligayang pagdating',
                'logout_button': 'Mag-logout',
                
                // ===== NAVIGATION =====
                'nav_back': 'Bumalik',
                'nav_my_profile': 'Aking Profile',
                'nav_account_settings': 'Mga Setting ng Account',
                'nav_order_history': 'Kasaysayan ng Order',
                
                // ===== PAGE HEADER =====
                'page_title': 'Aking Profile',
                'page_subtitle': 'Pamahalaan ang iyong mga setting at kagustuhan',
                
                // ===== SIDEBAR =====
                'change_photo': 'Palitan ang Larawan',
                'orders_label': 'Mga Order',
                'farmers_label': 'Mga Magsasaka',
                'rating_label': 'Rating',
                'menu_personal_info': 'Personal na Impormasyon',
                'menu_preferences': 'Mga Kagustuhan sa Produkto',
                'menu_recent_orders': 'Kamakailang Order',
                'menu_saved_sellers': 'Mga Na-save na Nagbebenta',
                'browse_sellers': 'Tingnan ang mga Nagbebenta',
                'my_saved_sellers': 'Aking Na-save na Nagbebenta',
                'browse_categories': 'Tingnan ang mga Kategorya',
                'sell_products': 'Magbenta ng Produkto',
                
                // ===== PERSONAL INFO =====
                'personal_info_title': 'Personal na Impormasyon',
                'first_name_label': 'Unang Pangalan',
                'first_name_placeholder': 'Ilagay ang iyong unang pangalan',
                'last_name_label': 'Apelyido',
                'last_name_placeholder': 'Ilagay ang iyong apelyido',
                'email_label': 'Email Address',
                'email_placeholder': 'Ilagay ang iyong email',
                'phone_label': 'Numero ng Telepono',
                'phone_placeholder': 'Ilagay ang iyong numero ng telepono',
                'address_label': 'Address',
                'address_placeholder': 'Ilagay ang iyong address',
                'bio_label': 'Bio',
                'bio_placeholder': 'Sabihin ang tungkol sa iyong sarili...',
                'save_changes': 'I-save ang mga Pagbabago',
                'cancel': 'Kanselahin',
                'profile_updated': 'Matagumpay na na-update ang profile!',
                'discard_changes': 'Sigurado ka bang gusto mong itapon ang mga pagbabago?',
                
                // ===== PREFERENCES =====
                'preferences_title': 'Mga Kagustuhan sa Produkto',
                'preferences_subtitle': 'Piliin ang mga uri ng produkto na interesado ka',
                'pref_vegetables': 'Mga Gulay',
                'pref_fruits': 'Mga Prutas',
                'pref_grains': 'Mga Butil',
                'pref_dairy': 'Mga Produktong Gatas',
                'pref_livestock': 'Mga Alagang Hayop',
                'pref_other': 'Iba pa',
                'update_preferences': 'I-update ang mga Kagustuhan',
                'preferences_updated': 'Matagumpay na na-update ang mga kagustuhan!',
                
                // ===== RECENT ORDERS =====
                'recent_orders_title': 'Kamakailang Order',
                'view_all_orders': 'Tingnan ang Lahat ng Order',
                'no_orders': 'Wala ka pang na-place na order.',
                'no_orders_sub': 'Magsimula sa pamimili upang makita ang iyong kasaysayan ng order!',
                'order_placed': 'Inilagay noong',
                'quantity_label': 'Dami',
                'total_label': 'Kabuuan',
                'status_processing': 'Pinoproseso',
                'status_shipped': 'Na-ship',
                'status_delivered': 'Na-deliver',
                'order_number': 'Order #',
                
                // ===== AVATAR MODAL =====
                'avatar_modal_title': 'Pumili ng Larawan ng Profile',
                'avatar_upload': 'Mag-upload',
                'avatar_cancel': 'Kanselahin',
                'avatar_save': 'I-save ang Avatar',
                'avatar_select': 'Mangyaring pumili ng avatar o mag-upload ng larawan.',
                'avatar_updated': 'Matagumpay na na-update ang larawan ng profile!',
                
                // ===== LOGOUT =====
                'logout_confirm': 'Sigurado ka bang gusto mong mag-logout?',
                
                // ===== FOOTER =====
                'footer_copyright': 'DARAWAT 2026 - Nag-uugnay sa mga Magsasaka at Mamimili',
                'footer_privacy': 'Patakaran sa Privacy',
                'footer_terms': 'Mga Tuntunin ng Serbisyo',
                'footer_contact': 'Makipag-ugnayan',
                'footer_help': 'Tulong',
                
                // ===== EMPTY STATES =====
                'no_orders_empty': 'Walang nakitang order.',
                
                // ===== ALERTS =====
                'login_required': 'Mangyaring mag-login upang ma-access ang iyong profile.',
                'profile_saved': 'Matagumpay na na-save ang profile!',
                'preferences_saved': 'Matagumpay na na-save ang mga kagustuhan!'
            },
            'ceb': {
                // ===== HEADER =====
                'logo_text': 'DARAWAT',
                'welcome_message': 'Maayong pag-abot',
                'logout_button': 'Pag-logout',
                
                // ===== NAVIGATION =====
                'nav_back': 'Balik',
                'nav_my_profile': 'Akong Profile',
                'nav_account_settings': 'Mga Setting sa Account',
                'nav_order_history': 'Kasaysayan sa Order',
                
                // ===== PAGE HEADER =====
                'page_title': 'Akong Profile',
                'page_subtitle': 'Paghimo sa imong mga setting ug gusto',
                
                // ===== SIDEBAR =====
                'change_photo': 'Ilis ang Litrato',
                'orders_label': 'Mga Order',
                'farmers_label': 'Mga Mag-uuma',
                'rating_label': 'Rating',
                'menu_personal_info': 'Personal nga Impormasyon',
                'menu_preferences': 'Mga Gusto sa Produkto',
                'menu_recent_orders': 'Bag-ohay nga Order',
                'menu_saved_sellers': 'Mga Na-save nga Namaligya',
                'browse_sellers': 'Tan-awa ang mga Namaligya',
                'my_saved_sellers': 'Akong Na-save nga Namaligya',
                'browse_categories': 'Tan-awa ang mga Kategorya',
                'sell_products': 'Magbaligya og Produkto',
                
                // ===== PERSONAL INFO =====
                'personal_info_title': 'Personal nga Impormasyon',
                'first_name_label': 'Unang Ngalan',
                'first_name_placeholder': 'Ibutang ang imong unang ngalan',
                'last_name_label': 'Apelyido',
                'last_name_placeholder': 'Ibutang ang imong apelyido',
                'email_label': 'Email Address',
                'email_placeholder': 'Ibutang ang imong email',
                'phone_label': 'Numero sa Telepono',
                'phone_placeholder': 'Ibutang ang imong numero sa telepono',
                'address_label': 'Address',
                'address_placeholder': 'Ibutang ang imong address',
                'bio_label': 'Bio',
                'bio_placeholder': 'Isulti ang bahin sa imong kaugalingon...',
                'save_changes': 'I-save ang mga Pagbag-o',
                'cancel': 'Kanselahon',
                'profile_updated': 'Malampuson nga na-update ang profile!',
                'discard_changes': 'Sigurado ka ba nga gusto nimong ilabay ang mga pagbag-o?',
                
                // ===== PREFERENCES =====
                'preferences_title': 'Mga Gusto sa Produkto',
                'preferences_subtitle': 'Pilia ang mga klase sa produkto nga interesado ka',
                'pref_vegetables': 'Mga Utanon',
                'pref_fruits': 'Mga Prutas',
                'pref_grains': 'Mga Lugas',
                'pref_dairy': 'Mga Produkto sa Gatas',
                'pref_livestock': 'Mga Hayop',
                'pref_other': 'Ubang pa',
                'update_preferences': 'I-update ang mga Gusto',
                'preferences_updated': 'Malampuson nga na-update ang mga gusto!',
                
                // ===== RECENT ORDERS =====
                'recent_orders_title': 'Bag-ohay nga Order',
                'view_all_orders': 'Tan-awa ang Tanang Order',
                'no_orders': 'Wala pa kay na-place nga order.',
                'no_orders_sub': 'Magsugod sa pamalit aron makita ang imong kasaysayan sa order!',
                'order_placed': 'Gibutang niadtong',
                'quantity_label': 'Gidaghanon',
                'total_label': 'Kinatibuk-an',
                'status_processing': 'Giproseso',
                'status_shipped': 'Na-ship',
                'status_delivered': 'Na-deliver',
                'order_number': 'Order #',
                
                // ===== AVATAR MODAL =====
                'avatar_modal_title': 'Pilia ang Litrato sa Profile',
                'avatar_upload': 'Mag-upload',
                'avatar_cancel': 'Kanselahon',
                'avatar_save': 'I-save ang Avatar',
                'avatar_select': 'Palihug pagpili og avatar o pag-upload og litrato.',
                'avatar_updated': 'Malampuson nga na-update ang litrato sa profile!',
                
                // ===== LOGOUT =====
                'logout_confirm': 'Sigurado ka ba nga gusto nimong mag-logout?',
                
                // ===== FOOTER =====
                'footer_copyright': 'DARAWAT 2026 - Nagkonekta sa mga Mag-uuma ug Mamalitay',
                'footer_privacy': 'Palisiya sa Privacy',
                'footer_terms': 'Mga Termino sa Serbisyo',
                'footer_contact': 'Kontaka Kami',
                'footer_help': 'Tabang',
                
                // ===== EMPTY STATES =====
                'no_orders_empty': 'Walay nakit-ang order.',
                
                // ===== ALERTS =====
                'login_required': 'Palihug pag-login aron ma-access ang imong profile.',
                'profile_saved': 'Malampuson nga na-save ang profile!',
                'preferences_saved': 'Malampuson nga na-save ang mga gusto!'
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

        console.log(`Buyer Profile translations applied for: ${this.currentLanguage}`);
    }
}

// Initialize
let buyerProfileLanguageSystem;
document.addEventListener('DOMContentLoaded', function() {
    buyerProfileLanguageSystem = new BuyerProfileLanguageSystem();
    window.buyerProfileLanguageSystem = buyerProfileLanguageSystem;
});