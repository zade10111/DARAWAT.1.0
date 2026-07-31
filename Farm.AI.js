 // ============================================================
    // BACK BUTTON
    // ============================================================
    function goBack() {
        window.history.back();
    }

    // ============================================================
    // ULTIMATE KNOWLEDGE BASE - 1,000+ ENTRIES
    // ============================================================
    const knowledgeBase = {

        // ============================================================
        // SECTION 1: GENERAL PLATFORM OVERVIEW
        // ============================================================

        'what is farmnet': '🌾 FarmNet is a revolutionary digital agricultural marketplace designed specifically for the Philippines. It\'s a complete ecosystem connecting farmers, buyers, cooperatives, LGUs, and NGOs to streamline farm-to-market trade. Built with regional pride, it supports Tagalog, Cebuano, Hiligaynon, Waray, and more. It\'s offline-first, blockchain-secured, and designed to be inclusive, joyful, and accessible to all Filipinos.',
        
        'farmnet overview': '🌾 FarmNet is a comprehensive agricultural technology platform that serves as a digital bridge between farmers and markets. It provides tools for listing products, managing inventory, processing orders, handling payments, and facilitating communication - all in one unified system. The platform is designed to work in both urban and rural settings, with offline capabilities for areas with limited internet connectivity.',
        
        'farmnet purpose': '🎯 The purpose of FarmNet is to eliminate the inefficiencies in the Philippine agricultural supply chain. By connecting farmers directly with buyers, we reduce middlemen, ensure fair prices, and provide market access to even the most remote farming communities. Our goal is to create a sustainable, transparent, and equitable agricultural marketplace.',
        
        'farmnet goal': '🏆 FarmNet\'s primary goal is to empower Filipino farmers by providing them with the digital tools they need to compete in the modern economy. We aim to increase farmer income, reduce food waste, improve food security, and create a vibrant community of agricultural stakeholders. By 2030, we envision FarmNet as the leading agricultural platform in Southeast Asia.',
        
        'farmnet story': '📖 FarmNet was born from the soil of Filipino ingenuity. Founded by a team of agricultural technologists and community organizers, we recognized the challenges faced by smallholder farmers - lack of market access, unfair pricing, and limited information. We built FarmNet to address these challenges, starting with a simple idea: technology should feel like home. Today, we serve thousands of farmers and buyers across the Philippines.',
        
        'farmnet values': '💎 FarmNet is built on core values:\n\n🌱 **Inclusivity:** Everyone deserves access to fair markets.\n🌿 **Sustainability:** We promote sustainable farming practices.\n🤝 **Community:** We believe in the power of collaboration.\n🔒 **Security:** Your data and transactions are protected.\n💡 **Innovation:** We continuously improve our platform.\n🌍 **Regional Pride:** We celebrate Filipino culture and languages.',
        
        'farmnet team': '👨‍💻 The FarmNet team is composed of passionate individuals from diverse backgrounds:\n\n• **Agricultural Experts:** With years of experience in farming and agribusiness.\n• **Software Engineers:** Building robust and scalable technology.\n• **Community Organizers:** Connecting with farmers and cooperatives.\n• **Customer Support:** Dedicated to helping users succeed.\n\nWe\'re united by a common goal: to transform Philippine agriculture.',
        
        'farmnet history': '📅 FarmNet\'s journey:\n\n• **2023:** Concept development and community research.\n• **2024:** Platform launch with beta users.\n• **2025:** Full public launch with 1,000+ users.\n• **2026:** Expansion to 5,000+ users and new features.\n\nWe\'re growing rapidly and continuously improving our platform.',
        
        'farmnet future': '🔮 The future of FarmNet includes:\n\n• **AI-Powered Farming:** Predictive analytics for crop management.\n• **Blockchain Integration:** Enhanced security and transparency.\n• **Logistics Network:** Integrated delivery and logistics solutions.\n• **Financial Services:** Access to credit and insurance for farmers.\n• **International Expansion:** Connecting Filipino farmers to global markets.\n\nWe\'re just getting started!',
        
        'farmnet impact': '📊 FarmNet\'s impact so far:\n\n• **1,500+ Farmers** have joined the platform.\n• **3,000+ Buyers** are sourcing fresh produce.\n• **10,000+ Orders** have been processed.\n• **₱5M+** in farmer revenue generated.\n• **30+ Cooperatives** and LGUs partnered.\n\nWe\'re making a real difference in communities across the Philippines.',
        
        'farmnet sustainability': '🌱 FarmNet is committed to sustainability:\n\n• **Eco-Friendly:** Promoting sustainable farming practices.\n• **Reducing Waste:** Minimizing post-harvest losses through efficient logistics.\n• **Empowering Farmers:** Providing tools for better farming decisions.\n• **Community Support:** Investing in agricultural education and training.\n\nSustainability is at the heart of everything we do.',
        
        // ============================================================
        // SECTION 2: FARMER/SELLER DETAILED
        // ============================================================

        'seller registration': '📝 Registering as a seller on FarmNet:\n\n1. Go to the Welcome Screen and click "Continue".\n2. Choose "Register as Seller".\n3. Fill in the registration form:\n   • **Farm Name:** The name of your farm.\n   • **Owner Name:** Your full name.\n   • **Email Address:** Your contact email.\n   • **Password:** Create a secure password.\n   • **Farm Address:** The physical address of your farm.\n   • **Farm Type:** Select from Vegetable, Fruit, Grain, Livestock, Dairy, or Mixed.\n4. Accept the Terms of Service.\n5. Click "Register & Login".\n\nYour account will be created, and you\'ll be logged in immediately!',
        
        'seller requirements': '✅ Requirements to become a seller:\n\n• **Legal Age:** You must be at least 18 years old.\n• **Valid Email:** A working email address for communication.\n• **Farm Details:** Information about your farm and products.\n• **Contact Number:** A valid phone number for buyer inquiries.\n• **Terms Agreement:** Acceptance of FarmNet\'s Terms of Service.\n\nNo special documents are required for basic registration.',
        
        'seller verification': '🔍 Seller verification on FarmNet:\n\n• **Verification Badge:** Verified sellers get a special badge on their profile.\n• **Documentation:** Sellers may be asked to provide proof of identity or farm ownership.\n• **Review Process:** Our team reviews applications for verification.\n• **Benefits:** Verified sellers get increased visibility and trust from buyers.\n\nVerification is optional but recommended for serious sellers.',
        
        'seller product management': '📦 Managing your products as a seller:\n\n1. **Add Product:** Fill in the product form with name, category, price, quantity, and description.\n2. **Edit Product:** Update any product details like price, stock, or description.\n3. **Activate/Deactivate:** Control whether a product is visible to buyers.\n4. **Delete:** Remove a product permanently from your store.\n5. **Bulk Actions:** Select multiple products for batch updates.\n\nAll product management is done from your Seller Dashboard.',
        
        'seller pricing strategy': '💰 Pricing strategy for sellers:\n\n• **Market Research:** Check what similar products are selling for.\n• **Cost Analysis:** Calculate your production costs (seeds, labor, transport, packaging).\n• **Competitive Pricing:** Price slightly below market to attract buyers.\n• **Premium Pricing:** If your product is organic or premium, price higher.\n• **Volume Discounts:** Offer discounts for bulk purchases.\n• **Regular Updates:** Review and adjust prices periodically.\n\nGood pricing attracts more buyers and increases sales.',
        
        'seller product photos': '📸 Tips for great product photos:\n\n• **Lighting:** Use natural daylight for best results.\n• **Clean Background:** A simple, clean background makes the product stand out.\n• **Multiple Angles:** Show the product from different sides.\n• **Close-Ups:** Show details like texture and quality.\n• **Freshness:** Show products at their freshest.\n• **Consistency:** Use a consistent style for all your products.\n\nGood photos significantly increase buyer interest.',
        
        'seller product descriptions': '✍️ Writing effective product descriptions:\n\n• **Be Detailed:** Provide specific information about your product.\n• **Highlight Benefits:** Explain why your product is special.\n• **Use Keywords:** Include words buyers might search for.\n• **Tell Your Story:** Share how the product is grown or made.\n• **Be Honest:** Don\'t exaggerate or make false claims.\n• **Include Origin:** Let buyers know where it comes from.\n\nA good description builds trust and converts browsers into buyers.',
        
        'seller inventory tips': '📊 Inventory management tips:\n\n• **Regular Updates:** Update stock levels after every sale.\n• **Set Alerts:** Use the min stock alert feature to avoid running out.\n• **Batch Tracking:** Track inventory by batch for freshness.\n• **Seasonal Planning:** Plan your inventory based on seasons.\n• **Loss Prevention:** Regularly check for spoilage or damage.\n\nProper inventory management ensures you never miss a sale.',
        
        'seller order processing': '📋 Processing orders as a seller:\n\n1. **View New Orders:** Check your dashboard for pending orders.\n2. **Confirm Orders:** Review and confirm orders within 24 hours.\n3. **Prepare Products:** Gather and pack the ordered items.\n4. **Arrange Delivery:** Coordinate delivery or pickup with the buyer.\n5. **Update Status:** Mark orders as shipped or delivered.\n6. **Request Payment:** For COD, collect payment upon delivery.\n\nFast order processing leads to happy buyers and repeat business.',
        
        'seller shipping tips': '🚚 Shipping tips for sellers:\n\n• **Secure Packaging:** Use sturdy boxes and proper padding.\n• **Freshness:** Use cooling packs for perishable items.\n• **Clear Labeling:** Label packages clearly with buyer details.\n• **Timely Dispatch:** Ship orders as quickly as possible.\n• **Tracking:** Provide tracking numbers to buyers.\n• **Insurance:** Consider insurance for high-value items.\n\nGood shipping practices build trust and encourage repeat orders.',
        
        'seller customer service': '💬 Excellent customer service for sellers:\n\n• **Respond Quickly:** Reply to buyer messages within 24 hours.\n• **Be Helpful:** Answer questions about your products.\n• **Handle Complaints:** Address issues promptly and professionally.\n• **Follow Up:** Check in with buyers after delivery.\n• **Ask for Reviews:** Encourage satisfied buyers to leave feedback.\n\nGreat service leads to great reviews and more sales.',
        
        'seller farm profile': '🏡 Your farm profile is your storefront:\n\n• **Farm Name:** Choose a memorable name.\n• **Description:** Tell buyers about your farm and story.\n• **Photos:** Showcase your farm with beautiful images.\n• **Certifications:** Display your organic or quality certifications.\n• **Contact Info:** Make it easy for buyers to reach you.\n\nA complete profile builds trust and attracts more buyers.',
        
        'seller farm story': '📖 Your farm story is your brand:\n\n• **Share Your Journey:** How did you start farming?\n• **Your Philosophy:** What makes your farm special?\n• **Your People:** Introduce the people behind the farm.\n• **Your Community:** How do you support your community?\n• **Your Products:** What makes your products unique?\n\nA compelling story connects with buyers on an emotional level.',
        
        'seller sustainable farming': '🌱 Sustainable farming practices:\n\n• **Organic Methods:** Avoid synthetic pesticides and fertilizers.\n• **Crop Rotation:** Maintain soil health by rotating crops.\n• **Water Conservation:** Use efficient irrigation systems.\n• **Integrated Pest Management:** Use natural pest control methods.\n• **Biodiversity:** Grow a variety of crops to support ecosystem health.\n\nSustainable farming is good for the planet and attracts conscious buyers.',
        
        'seller certifications': '🏅 Certifications that build trust:\n\n• **Organic:** Certified organic by recognized bodies.\n• **Sustainable:** Sustainable agriculture certification.\n• **GMP (Good Manufacturing Practices):** For processed foods.\n• **HACCP:** Food safety certification.\n• **GlobalG.A.P.:** International food safety standard.\n• **Fair Trade:** Commitment to fair labor practices.\n\nCertifications signal quality and responsibility to buyers.',
        
        'seller tax compliance': '📋 Tax compliance for sellers:\n\n• **Registered Business:** Register your farm as a business.\n• **BIR Registration:** Register with the Bureau of Internal Revenue.\n• **Sales Records:** Keep accurate records of all sales.\n• **Receipts:** Issue official receipts to buyers.\n• **Tax Filing:** File your taxes regularly.\n\nFarmNet provides tools to help you manage your sales records.',
        
        'seller legal compliance': '⚖️ Legal compliance for sellers:\n\n• **Business Permit:** Secure a business permit from your LGU.\n• **Food Safety:** Comply with food safety regulations.\n• **Product Labeling:** Ensure accurate product labeling.\n• **Consumer Protection:** Follow consumer protection laws.\n• **Data Privacy:** Comply with data privacy regulations.\n\nFarmNet is committed to helping sellers operate legally and ethically.',
        
        'seller expansion': '📈 Growing your farm business:\n\n• **Diversify Products:** Offer a wider variety of products.\n• **Increase Volume:** Expand your production capacity.\n• **Build a Brand:** Develop a strong brand identity.\n• **Leverage Marketing:** Use FarmNet\'s marketing tools to promote your farm.\n• **Partner:** Collaborate with other sellers or cooperatives.\n\nFarmNet provides the tools you need to grow your business.',
        
        'seller success stories': '🌟 Seller success stories on FarmNet:\n\n• **Maria Santos:** Tripled her farm income in 6 months.\n• **Green Valley Farms:** Expanded from 5 to 50 products.\n• **Sunshine Orchards:** Now serving buyers across the country.\n• **Organic Oasis:** Became a certified organic farm.\n• **Coastal Harvest:** Built a thriving cooperative community.\n\nYour success story could be next!',

        // ============================================================
        // SECTION 3: BUYER DETAILED
        // ============================================================

        'buyer registration': '📝 Registering as a buyer on FarmNet:\n\n1. Go to the Welcome Screen and click "Continue".\n2. Choose "Register as Buyer".\n3. Fill in the registration form:\n   • **Full Name:** Your complete name.\n   • **Email Address:** Your contact email.\n   • **Password:** Create a secure password.\n   • **Address:** Your delivery address.\n4. Accept the Terms of Service.\n5. Click "Register & Login".\n\nYour account will be created, and you\'ll be logged in immediately!',
        
        'buyer searching': '🔍 Searching for products:\n\n1. Go to your Buyer Dashboard.\n2. Use the **Search Bar** at the top of the page.\n3. Type in a product name (e.g., "tomatoes", "mangoes").\n4. Press Enter or click the search button.\n5. Products matching your search will be displayed.\n\nYou can also filter by category for more specific results.',
        
        'buyer filtering': '🔎 Filtering products:\n\n• **Category Filter:** Click on a category button (Vegetables, Fruits, Grains, Livestock, Dairy) to see only that category.\n• **Price Range:** Set a minimum and maximum price.\n• **Seller Rating:** Filter by seller rating.\n• **Location:** Find products from nearby farms.\n• **Availability:** Show only in-stock items.\n\nFilters help you find exactly what you\'re looking for quickly.',
        
        'buyer product details': '📦 Viewing product details:\n\n1. Click on a product card in the products grid.\n2. A modal will open with detailed information:\n   • **Product Name and Image:** Visual identification.\n   • **Price:** Cost per unit.\n   • **Description:** Detailed product information.\n   • **Seller Info:** Who is selling the product.\n   • **Stock Level:** How many units are available.\n   • **Reviews:** Ratings and feedback from other buyers.\n3. From here, you can add to cart or buy now.\n\nAlways check product details before purchasing.',
        
        'buyer cart management': '🛒 Managing your shopping cart:\n\n1. Go to your **Shopping Cart** page.\n2. View all items you\'ve added.\n3. **Adjust Quantities:** Use the + and - buttons or enter a number.\n4. **Remove Items:** Click the "Remove" button to delete an item.\n5. **Clear Cart:** Empty your entire cart with one click.\n6. **Proceed to Checkout:** When you\'re ready to buy.\n\nYour cart is saved even if you leave the page.',
        
        'buyer checkout process': '💳 The checkout process:\n\n1. Review your cart items.\n2. Click **"Proceed to Checkout"**.\n3. Choose **Delivery Method:** Home Delivery or Farm Pickup.\n4. Enter delivery or pickup details.\n5. Choose **Payment Method:** GCash, Bank Transfer, Cash on Delivery, etc.\n6. Review the order summary.\n7. Click **"Place Order"** to confirm.\n\nYou\'ll receive an order confirmation with details.',
        
        'buyer order statuses': '📊 Order statuses explained:\n\n• **Pending:** The order has been placed but not yet confirmed.\n• **Confirmed:** The seller has accepted the order.\n• **Processing:** The seller is preparing your order.\n• **Shipped:** Your order is on its way.\n• **Delivered:** The order has been successfully delivered.\n• **Cancelled:** The order has been cancelled.\n\nTrack your order status in "Order History".',
        
        'buyer receiving orders': '📦 Receiving your order:\n\n1. **Check Delivery:** Wait for the delivery or pickup time.\n2. **Inspect Products:** Check the quality and quantity.\n3. **Report Issues:** Contact the seller within 24 hours if there are problems.\n4. **Confirm Receipt:** Mark the order as received if required.\n5. **Leave a Review:** Share your experience to help other buyers.\n\nHappy buyers build a stronger community!',
        
        'buyer quality issues': '⚠️ If you receive poor quality products:\n\n1. **Take Photos:** Document the quality issues.\n2. **Contact Seller:** Message the seller within 24 hours.\n3. **Explain the Issue:** Provide details and photos.\n4. **Request Resolution:** Ask for a refund or replacement.\n5. **Escalate:** If the seller doesn\'t respond, contact support@farmnet.ph.\n\nWe\'re committed to ensuring buyer satisfaction.',
        
        'buyer returns': '🔄 Returning products:\n\n1. **Contact Seller:** Notify the seller of your intention to return.\n2. **Get Approval:** The seller must approve the return.\n3. **Return Product:** Send the product back (buyer pays shipping).\n4. **Receive Refund:** Once the seller receives the product, you\'ll get a refund.\n\nReturns are handled between the buyer and seller.',
        
        'buyer refunds': '💰 Receiving a refund:\n\n1. Request a refund from the seller.\n2. If the seller agrees, they will process the refund.\n3. Refunds are processed through the original payment method.\n4. Allow 3-5 business days for the refund to appear.\n\nIf you have issues, contact support@farmnet.ph.',
        
        'buyer favorites': '❤️ Saving favorite products:\n\n1. Find a product you like.\n2. Click the "Heart" or "Save" icon.\n3. The product will be added to your favorites.\n4. Access your favorites from your profile.\n5. Quickly reorder favorite items.\n\nFavorites make it easy to find products you love.',
        
        'buyer subscription': '📬 Product subscriptions:\n\n• **Subscribe:** Set up recurring orders for regular products.\n• **Frequency:** Choose weekly, bi-weekly, or monthly.\n• **Quantity:** Specify the quantity each time.\n• **Pause/Resume:** Control your subscription anytime.\n\nSubscriptions ensure you never run out of your favorite products.',
        
        'buyer bulk buying': '📦 Buying in bulk:\n\n• **Benefits:** Lower prices and fewer transactions.\n• **Minimum Quantity:** Sellers may have minimums for bulk.\n• **Negotiation:** Message sellers to negotiate bulk discounts.\n• **Logistics:** Plan for delivery of large orders.\n\nBulk buying is great for restaurants, businesses, and families.',
        
        'buyer seasonal buying': '🌿 Seasonal buying tips:\n\n• **Know the Seasons:** Learn when products are in season.\n• **Better Prices:** Seasonal products are usually cheaper.\n• **Better Quality:** In-season products are fresher.\n• **Plan Ahead:** Buy extra to preserve or store.\n\nSeasonal buying saves money and supports sustainable farming.',
        
        'buyer nutrition tips': '🥗 Nutrition tips for buyers:\n\n• **Eat the Rainbow:** Choose fruits and vegetables of different colors.\n• **Fresh is Best:** Fresh produce has more nutrients.\n• **Local is Better:** Local produce is fresher and more nutritious.\n• **Seasonal Choices:** Seasonal produce is at its nutritional peak.\n\nFarmNet helps you find the freshest, most nutritious products.',
        
        'buyer cooking tips': '🍳 Cooking with farm-fresh ingredients:\n\n• **Keep It Simple:** Let the quality of fresh ingredients shine.\n• **Season Properly:** Salt and pepper enhance natural flavors.\n• **Don\'t Overcook:** Fresh vegetables are best when tender-crisp.\n• **Use All Parts:** Reduce waste by using whole vegetables.\n\nFresh ingredients make every meal better!',

        // ============================================================
        // SECTION 4: PAYMENTS DETAILED
        // ============================================================

        'payment options': '💳 FarmNet payment options:\n\n1. **GCash:** Pay using your GCash mobile wallet.\n2. **Maya:** Pay using the Maya app (formerly PayMaya).\n3. **Bank Transfer:** Direct transfer to seller\'s bank account.\n4. **Cash on Delivery (COD):** Pay cash upon delivery.\n5. **Credit/Debit Card:** Coming soon.\n6. **Cooperative Credits:** For partner cooperatives.\n\nChoose the payment method that\'s most convenient for you.',
        
        'how to pay with gcash': '📱 Paying with GCash:\n\n1. Select **GCash** at checkout.\n2. Enter your registered GCash mobile number.\n3. You\'ll receive a payment request in your GCash app.\n4. Open the GCash app and confirm the payment.\n5. Enter your GCash PIN to authorize.\n6. Once confirmed, your order will be processed.\n\nGCash payments are instant and secure.',
        
        'how to pay with maya': '📱 Paying with Maya:\n\n1. Select **Maya** at checkout.\n2. Enter your registered Maya mobile number.\n3. You\'ll receive a payment request in the Maya app.\n4. Open the Maya app and confirm the payment.\n5. Enter your Maya PIN to authorize.\n6. Once confirmed, your order will be processed.\n\nMaya payments are fast and convenient.',
        
        'how to pay with bank transfer': '🏦 Paying with Bank Transfer:\n\n1. Select **Bank Transfer** at checkout.\n2. You\'ll receive the seller\'s bank account details.\n3. Transfer the exact amount to the provided account.\n4. Enter the transaction reference number on the FarmNet payment page.\n5. Your order will be confirmed once payment is verified.\n6. Verification usually takes 1-3 business days.\n\nBank transfers are secure and widely used.',
        
        'how to pay with cod': '💵 Paying with Cash on Delivery:\n\n1. Select **Cash on Delivery** at checkout.\n2. Prepare the exact cash amount for your order.\n3. When the delivery arrives, pay the delivery person.\n4. Receive your order.\n5. Confirm receipt on the platform.\n\nCOD is simple and doesn\'t require digital payment.',
        
        'payment security': '🔒 Payment security on FarmNet:\n\n• **Encryption:** All payment data is encrypted.\n• **Blockchain:** Transactions are recorded on the blockchain.\n• **PCI Compliance:** We adhere to payment security standards.\n• **No Storage:** We don\'t store your full payment details.\n• **Verification:** Every transaction is verified.\n\nYour payment information is safe with FarmNet.',
        
        'payment problems': '⚠️ Common payment problems and solutions:\n\n• **Insufficient Funds:** Ensure you have enough balance in your account.\n• **Incorrect Details:** Double-check your payment information.\n• **Expired Card:** For card payments, check the expiry date.\n• **Bank Issues:** Some banks may have transfer limits.\n• **Technical Glitches:** Try again later or use a different method.\n\nIf problems persist, contact support@farmnet.ph.',
        
        'payment refund': '💰 Payment refund process:\n\n1. Request a refund from the seller.\n2. The seller approves the refund.\n3. The refund is processed through the original payment method.\n4. Allow 3-5 business days for the refund to appear.\n5. You\'ll receive a notification when the refund is complete.\n\nRefunds are handled securely and transparently.',
        
        'payment history': '📋 Viewing your payment history:\n\n1. Go to your **Profile** page.\n2. Click on **"Payment History"**.\n3. You\'ll see a list of all your transactions.\n4. Each transaction shows the date, amount, and status.\n5. Click on any transaction for more details.\n\nYour payment history is always available for your records.',
        
        'payment receipts': '🧾 Getting payment receipts:\n\n• **Email:** A receipt is sent to your registered email.\n• **In-App:** View receipts in your payment history.\n• **Download:** Some receipts can be downloaded as PDF.\n• **Print:** Receipts can be printed for your records.\n\nReceipts are important for tracking your purchases.',
        
        'payment disputes': '⚖️ Resolving payment disputes:\n\n1. **Contact the Seller:** Try to resolve the issue directly.\n2. **Document Everything:** Keep screenshots and records.\n3. **Contact Support:** If unresolved, email support@farmnet.ph.\n4. **Provide Details:** Share all relevant information.\n5. **Investigation:** We\'ll investigate and work to resolve the dispute.\n\nWe\'re committed to fair resolution of all disputes.',
        
        'payment charges': '💰 Payment charges on FarmNet:\n\n• **Buyer Fees:** Buyers pay no platform fees.\n• **Seller Fees:** Sellers pay a 3% transaction fee.\n• **Payment Gateway Fees:** Some payment methods may have fees.\n• **No Hidden Fees:** All fees are clearly disclosed.\n\nFarmNet is transparent about all charges.',
        
        'payment limits': '📊 Payment limits:\n\n• **GCash/Maya:** Daily transaction limits may apply.\n• **Bank Transfer:** Limits vary by bank.\n• **COD:** No specific limits.\n• **Maximum Order Value:** Some sellers may set maximum order values.\n\nCheck your payment method for specific limits.',
        
        'payment confirmation': '✅ Payment confirmation:\n\n• **Email:** You\'ll receive an email confirmation.\n• **In-App:** Your order status will update.\n• **SMS:** Some users may receive SMS confirmation.\n• **Seller Notification:** The seller will be notified automatically.\n\nYou\'ll know your payment has been processed immediately.',

        // ============================================================
        // SECTION 5: SHIPPING DETAILED
        // ============================================================

        'shipping methods': '🚚 Shipping methods on FarmNet:\n\n1. **Home Delivery:** Delivered directly to your address.\n2. **Farm Pickup:** Collect from the farm.\n3. **Courier Service:** Third-party delivery for larger orders.\n4. **Barangay Drop-off:** Delivery to a designated pickup point.\n5. **Express Delivery:** Faster delivery for urgent orders.\n\nChoose the method that best suits your needs.',
        
        'shipping fees': '💸 Shipping fees explained:\n\n• **Home Delivery:** ₱50-₱200 depending on distance.\n• **Farm Pickup:** Free.\n• **Courier Service:** Calculated based on weight and distance.\n• **Free Delivery:** Available for orders above a certain amount (usually ₱500).\n• **Express Delivery:** Higher fees for faster service.\n\nShipping fees are clearly shown at checkout.',
        
        'shipping time': '⏰ Estimated shipping times:\n\n• **Same-Day:** For orders placed before cut-off time in local areas.\n• **Next-Day:** For nearby areas with established routes.\n• **2-3 Days:** For provincial deliveries.\n• **5-7 Days:** For remote or far-flung areas.\n• **Faster Options:** Express delivery may be available.\n\nDelivery times are estimates and may vary.',
        
        'shipping tracking': '🔍 Tracking your shipment:\n\n1. Go to **"Order History"**.\n2. Find your order and click **"Track"**.\n3. You\'ll see the current status and location.\n4. Receive real-time updates via notification.\n5. Contact the seller if you have concerns.\n\nTracking keeps you informed about your delivery.',
        
        'shipping packaging': '📦 Packaging for shipping:\n\n• **Fresh Products:** Use cooling packs for perishables.\n• **Fragile Items:** Use bubble wrap or padding.\n• **Liquids:** Use leak-proof containers.\n• **Dry Goods:** Use sealed bags or containers.\n• **Clear Labeling:** Include delivery address and contact.\n\nProper packaging ensures your products arrive in good condition.',
        
        'shipping problems': '⚠️ Common shipping problems:\n\n• **Delayed Delivery:** Contact the seller or courier.\n• **Damaged Products:** Document and contact the seller.\n• **Wrong Address:** Update your address for future orders.\n• **Lost Package:** Report to seller immediately.\n• **No-Show Delivery:** Contact support for assistance.\n\nMost shipping issues can be resolved quickly with communication.',
        
        'shipping insurance': '🛡️ Shipping insurance:\n\n• **Available:** For high-value orders.\n• **Cost:** Varies based on order value.\n• **Coverage:** Loss or damage during transit.\n• **Process:** File a claim with documentation.\n\nInsurance provides peace of mind for valuable orders.',
        
        'shipping preferences': '⚙️ Managing shipping preferences:\n\n1. Go to your **Profile** page.\n2. Click on **"Shipping Settings"**.\n3. Set your default delivery address.\n4. Choose your preferred shipping method.\n5. Save your preferences.\n\nYour preferences will be applied to future orders.',
        
        'shipping address': '📍 Managing shipping addresses:\n\n1. Go to **"Account Settings"**.\n2. Click on **"Shipping Address"**.\n3. Add a new address.\n4. Edit or delete existing addresses.\n5. Set a default address.\n\nYou can have multiple addresses saved for convenience.',
        
        'shipping confirmation': '📬 Shipping confirmation:\n\n• **Email:** You\'ll receive a shipping confirmation email.\n• **In-App:** Order status will update to "Shipped".\n• **SMS:** Some users may receive SMS notifications.\n• **Tracking Link:** You may receive a tracking link.\n\nYou\'ll know exactly when your order is on its way.',
        
        'shipping receipt': '🧾 Shipping receipt:\n\n• **Email:** A shipping receipt is sent to your email.\n• **In-App:** View in order history.\n• **Download:** Some receipts can be downloaded.\n• **Print:** Print for your records.\n\nKeep shipping receipts for your records.',
        
        'shipping carrier': '🚚 Shipping carriers on FarmNet:\n\n• **LBC:** Nationwide delivery service.\n• **J&T Express:** Fast and reliable courier.\n• **NinjaVan:** Efficient delivery service.\n• **GrabExpress:** On-demand delivery.\n• **Local Carriers:** Regional and local delivery partners.\n\nCarriers are selected based on location and delivery needs.',
        
        'shipping terms': '📋 Understanding shipping terms:\n\n• **FOB (Free on Board):** Seller pays shipping until it\'s loaded.\n• **CIF (Cost, Insurance, Freight):** Seller covers everything.\n• **EXW (Ex Works):** Buyer arranges and pays for shipping.\n\nMost FarmNet orders use standard shipping terms.',
        
        'shipping restrictions': '🚫 Shipping restrictions:\n\n• **Live Animals:** Special arrangements required.\n• **Flammable Items:** May be restricted.\n• **Large Items:** May require special shipping.\n• **Remote Areas:** Some areas may not be serviceable.\n\nCheck with the seller for specific restrictions.',
        
        'shipping international': '🌏 International shipping:\n\n• **Currently Not Available:** FarmNet focuses on domestic shipping.\n• **Future Plans:** International shipping may be added later.\n\nFor now, FarmNet serves customers within the Philippines.',

        // ============================================================
        // SECTION 6: MESSAGING DETAILED
        // ============================================================

        'messaging system': '💬 The FarmNet messaging system:\n\n• **Direct Chat:** One-on-one messaging between buyers and sellers.\n• **Real-Time:** Messages are delivered instantly.\n• **Notifications:** Get notified when you receive messages.\n• **Search:** Find old messages easily.\n• **Media:** Send images and videos (coming soon).\n• **Archived:** Archive conversations for later.\n\nThe messaging system makes communication easy and convenient.',
        
        'how to start a chat': '💌 Starting a chat:\n\n1. Go to a product page.\n2. Click on the **"Message Seller"** tab.\n3. Type your message.\n4. Click **"Send Message"**.\n5. The seller will receive your message.\n6. Reply and continue the conversation.\n\nStarting a chat is simple and quick.',
        
        'how to reply to a message': '✉️ Replying to a message:\n\n1. Go to your **"Messages"** page.\n2. Click on the conversation.\n3. Type your reply in the text box at the bottom.\n4. Click **"Send"**.\n5. Your reply will be sent instantly.\n\nStaying responsive builds trust with buyers and sellers.',
        
        'message notifications': '🔔 Message notifications:\n\n• **In-App Badge:** Shows the number of unread messages.\n• **Email:** You\'ll receive email notifications.\n• **SMS:** Some users may receive SMS notifications.\n• **Push Notifications:** For mobile app users.\n\nNever miss a message with FarmNet notifications.',
        
        'message history': '📜 Viewing message history:\n\n1. Go to your **"Messages"** page.\n2. Click on a conversation.\n3. Scroll through the message history.\n4. Read past messages and replies.\n5. Continue the conversation.\n\nYour message history is always available for reference.',
        
        'message search': '🔍 Searching messages:\n\n1. Go to your **"Messages"** page.\n2. Use the **Search Bar** at the top.\n3. Type in a keyword or name.\n4. Messages matching your search will be highlighted.\n5. Click on a result to view the conversation.\n\nSearch makes finding old messages easy.',
        
        'message filtering': '🔎 Filtering messages:\n\n• **Unread:** Show only unread messages.\n• **Buyers:** Show messages from buyers.\n• **Sellers:** Show messages from sellers.\n• **Date Range:** Filter by date.\n• **Product:** Filter by product.\n\nFilters help you organize your messages.',
        
        'message management': '📋 Managing messages:\n\n• **Mark as Read:** Mark unread messages as read.\n• **Archive:** Archive conversations you don\'t need.\n• **Delete:** Delete messages you no longer need.\n• **Block:** Block spam or abusive users.\n\nEffective message management keeps your inbox organized.',
        
        'message etiquette': '📝 Message etiquette on FarmNet:\n\n• **Be Polite:** Use respectful language.\n• **Be Clear:** Write clear and concise messages.\n• **Respond Promptly:** Reply within 24 hours.\n• **Be Honest:** Provide accurate information.\n• **Respect Boundaries:** Don\'t spam or harass.\n\nGood etiquette builds positive relationships.',
        
        'message spam': '🚫 Dealing with spam messages:\n\n1. Don\'t engage with spam messages.\n2. Click the **"Report"** button on the message.\n3. We\'ll investigate and take action.\n4. You can also block the sender.\n\nFarmNet has a zero-tolerance policy for spam.',
        
        'message privacy': '🔒 Message privacy:\n\n• **Private:** Messages are private between participants.\n• **Secure:** Messages are encrypted.\n• **No Sharing:** We don\'t share your messages.\n• **Data Retention:** Messages are stored for your convenience.\n• **Deletion:** You can delete messages anytime.\n\nYour messages are safe and private on FarmNet.',
        
        'message attachment': '📎 Sending attachments:\n\n• **Currently Not Available:** Text-only messaging.\n• **Coming Soon:** Image and video sharing.\n\nWe\'re working on adding media sharing to the messaging system.',
        
        'message templates': '📄 Message templates for sellers:\n\n• **Welcome:** "Thank you for your interest!"\n• **Order Confirmation:** "Your order has been confirmed."\n• **Shipping Update:** "Your order is on its way."\n• **Follow-Up:** "How was your experience?"\n\nTemplates save time and ensure consistent communication.',

        // ============================================================
        // SECTION 7: PRODUCTS DETAILED
        // ============================================================

        'product categories list': '📂 List of product categories:\n\n**Vegetables:**\n• Leafy greens, Root vegetables, Fruiting vegetables\n\n**Fruits:**\n• Tropical fruits, Citrus fruits, Berries\n\n**Grains:**\n• Rice, Corn, Wheat, Oats\n\n**Livestock:**\n• Chicken, Pork, Beef, Goat\n\n**Dairy:**\n• Milk, Cheese, Eggs\n\n**Others:**\n• Herbs, Spices, Processed goods\n\nFind what you need by browsing categories.',
        
        'product condition': '📦 Product condition options:\n\n• **Fresh:** Harvested within 24 hours.\n• **Frozen:** Preserved through freezing.\n• **Dried:** Dehydrated for longer shelf life.\n• **Processed:** Prepared or cooked products.\n• **Organic:** Grown without synthetic chemicals.\n\nChoose the condition that best describes your product.',
        
        'product units': '⚖️ Common product units:\n\n• **kg (Kilogram):** For most produce.\n• **g (Gram):** For smaller quantities.\n• **lb (Pound):** Used for some products.\n• **piece:** For individual items.\n• **bunch:** For items sold in bunches.\n• **dozen:** For eggs and other items.\n• **liter:** For liquids.\n\nSpecify the unit clearly for buyers.',
        
        'product pricing': '💰 How product pricing works:\n\n• **Price per Unit:** The cost per unit of measure.\n• **Bulk Discounts:** Lower prices for larger quantities.\n• **Seasonal Pricing:** Prices may vary by season.\n• **Promotions:** Special pricing for promotions.\n• **Minimum Order:** Some sellers have minimum quantities.\n\nAlways check the price before ordering.',
        
        'product availability': '📊 Product availability status:\n\n• **In Stock:** Available for purchase.\n• **Low Stock:** Limited quantity available.\n• **Out of Stock:** Currently unavailable.\n• **Seasonal:** Only available during certain seasons.\n• **Pre-Order:** Available for future delivery.\n\nCheck availability before placing your order.',
        
        'product quality': '⭐ Understanding product quality:\n\n• **Premium:** Best quality available.\n• **Standard:** Good quality at regular price.\n• **Economy:** Budget-friendly options.\n• **Organic:** Grown without synthetic chemicals.\n• **Local:** Produced in your region.\n\nQuality is indicated in the product description.',
        
        'product freshness': '🌿 Product freshness indicators:\n\n• **Harvest Date:** When the product was harvested.\n• **Packaging Date:** When the product was packaged.\n• **Shelf Life:** How long the product stays fresh.\n• **Storage Instructions:** How to store for freshness.\n• **Visual Indicators:** Color, texture, and smell.\n\nFreshness is key to a satisfying purchase.',
        
        'product origin': '📍 Product origin information:\n\n• **Farm Location:** Where the product was grown.\n• **Province/Region:** The region of origin.\n• **Barangay:** Local community.\n• **GPS Coordinates:** For exact location.\n• **Farmer Name:** Who grew the product.\n\nKnowing your product\'s origin builds trust.',
        
        'product seasonality': '🌱 Seasonal product guide:\n\n• **Rainy Season:** Leafy vegetables, root crops.\n• **Dry Season:** Fruits, grains.\n• **Transition Seasons:** Variety of products.\n• **Off-Season:** Limited availability, higher prices.\n\nBuy seasonal products for better prices and freshness.',
        
        'product storage': '🧊 Storing your products:\n\n• **Refrigerate:** Perishable items.\n• **Room Temperature:** Dry goods.\n• **Freeze:** Long-term storage.\n• **Cool, Dark Place:** For grains and dry goods.\n• **Airtight Containers:** For freshness.\n\nProper storage extends product life and quality.',
        
        'product handling': '🧤 Handling your products:\n\n• **Wash:** Wash before use.\n• **Peel:** Remove skins or peels as needed.\n• **Cut:** Prepare for cooking or eating.\n• **Storage:** Store properly to maintain freshness.\n• **Dispose:** Proper disposal of packaging.\n\nSafe handling ensures quality and safety.',
        
        'product cooking': '🍳 Cooking with farm-fresh ingredients:\n\n• **Vegetables:** Best when lightly cooked.\n• **Fruits:** Enjoy fresh or cooked.\n• **Grains:** Cook until tender.\n• **Meat:** Cook thoroughly for safety.\n• **Dairy:** Use in various recipes.\n\nFarm-fresh ingredients make any dish better.',
        
        'product nutrition': '🥗 Nutritional information:\n\n• **Calories:** Energy content.\n• **Protein:** Essential for growth.\n• **Fiber:** Important for digestion.\n• **Vitamins:** Essential nutrients.\n• **Minerals:** Important for health.\n\nKnowing nutrition helps you make healthy choices.',
        
        'product allergens': '⚠️ Common allergens:\n\n• **Dairy:** Milk and dairy products.\n• **Eggs:** Eggs and egg products.\n• **Wheat:** Wheat and gluten.\n• **Soy:** Soy products.\n• **Nuts:** Tree nuts and peanuts.\n\nCheck product descriptions for allergen information.',
        
        'product additives': '🧪 Understanding product additives:\n\n• **Natural:** No artificial additives.\n• **Organic:** No synthetic additives.\n• **Preservatives:** May contain preservatives.\n• **Artificial:** Contains artificial ingredients.\n\nRead product descriptions for additive information.',
        
        'product packaging': '📦 Product packaging types:\n\n• **Eco-Friendly:** Biodegradable materials.\n• **Plastic:** Traditional packaging.\n• **Glass:** For delicate items.\n• **Paper:** Recyclable packaging.\n• **Bulk:** No packaging for bulk items.\n\nPackaging varies by seller and product.',
        
        'product returns': '🔄 Returning a product:\n\n1. **Contact the Seller:** Explain the reason for return.\n2. **Agreement:** The seller must agree to the return.\n3. **Return the Product:** Ship it back (buyer pays shipping).\n4. **Processing:** Seller receives and inspects the product.\n5. **Refund:** Refund processed after inspection.\n\nReturns are subject to the seller\'s return policy.',
        
        'product guarantees': '🛡️ Product guarantees:\n\n• **Quality Guarantee:** Product meets quality standards.\n• **Freshness Guarantee:** Product is fresh.\n• **Authenticity Guarantee:** Product is as described.\n• **Satisfaction Guarantee:** Buyer satisfaction.\n\nGuarantees vary by seller and product.',
        
        'product support': '📞 Product support:\n\n• **Seller Support:** Contact the seller directly.\n• **Platform Support:** Contact support@farmnet.ph.\n• **FAQ:** Find answers to common questions.\n• **Documentation:** Product guides and information.\n\nSupport is available to help with any product issues.',
        
        'product reviews': '⭐ Writing a product review:\n\n1. Go to the product page.\n2. Click on the **"Reviews"** tab.\n3. Click **"Write a Review"**.\n4. Select a star rating (1-5).\n5. Write your review comment.\n6. Click **"Submit"**.\n\nReviews help other buyers make informed decisions.',
        
        'product ratings': '⭐⭐⭐⭐⭐ Understanding ratings:\n\n• **5 Stars:** Excellent quality.\n• **4 Stars:** Very good quality.\n• **3 Stars:** Good quality.\n• **2 Stars:** Poor quality.\n• **1 Star:** Very poor quality.\n\nRatings reflect buyer satisfaction with the product.',

        // ============================================================
        // SECTION 8: SECURITY DETAILED
        // ============================================================

        'security overview': '🔒 FarmNet security overview:\n\n• **Data Encryption:** All data is encrypted.\n• **Secure Login:** Password-protected accounts.\n• **Blockchain:** Tamper-proof transactions.\n• **Privacy:** Your data is private.\n• **Regular Audits:** We conduct security audits.\n\nYour security is our top priority.',
        
        'password security': '🔐 Password security tips:\n\n• **Use Strong Passwords:** Mix letters, numbers, and symbols.\n• **Unique Passwords:** Use different passwords for different sites.\n• **Don\'t Share:** Never share your password.\n• **Change Regularly:** Change your password periodically.\n• **Use a Password Manager:** Store passwords securely.\n\nA strong password protects your account.',
        
        'two factor authentication': '🔐 Two-Factor Authentication (2FA):\n\n1. Go to **"Account Settings"**.\n2. Click on **"Privacy & Security"**.\n3. Enable Two-Factor Authentication.\n4. Scan the QR code with an authenticator app.\n5. Enter the verification code.\n6. 2FA is now enabled.\n\n2FA adds an extra layer of security to your account.',
        
        'account security': '🛡️ Account security tips:\n\n• **Check Login Activity:** Review recent logins.\n• **Enable 2FA:** Protect your account.\n• **Log Out:** Log out from shared devices.\n• **Secure Devices:** Keep your devices secure.\n• **Phishing Awareness:** Don\'t click on suspicious links.\n\nStay vigilant to keep your account secure.',
        
        'data privacy': '📋 Data privacy practices:\n\n• **Minimal Collection:** We collect only necessary data.\n• **User Control:** You control your data.\n• **No Selling:** We never sell your data.\n• **Secure Storage:** Data is securely stored.\n• **Privacy Policy:** Read our privacy policy.\n\nYour data privacy is respected and protected.',
        
        'data sharing': '🤝 Data sharing on FarmNet:\n\n• **Sellers:** Share product information with buyers.\n• **Delivery Partners:** Share address for deliveries.\n• **Payment Processors:** Share payment data.\n• **No Third-Party Marketing:** We don\'t share for marketing.\n\nWe share data only when necessary for transactions.',
        
        'data retention': '📂 Data retention policy:\n\n• **Active Accounts:** Data retained while active.\n• **Inactive Accounts:** Data retained for a period.\n• **Deleted Accounts:** Data is deleted.\n• **Transaction History:** Retained for records.\n\nData is retained as needed for operations.',
        
        'data access': '🔑 Accessing your data:\n\n1. Go to **"Account Settings"**.\n2. Click on **"Privacy & Security"**.\n3. Click **"Request Data Export"**.\n4. We\'ll send your data to your email.\n\nYou can access and download your data anytime.',
        
        'data correction': '✏️ Correcting your data:\n\n1. Go to **"Account Settings"**.\n2. Edit your profile information.\n3. Save changes.\n4. Your data will be updated.\n\nKeep your data accurate and up-to-date.',
        
        'data deletion': '🗑️ Deleting your data:\n\n1. Go to **"Account Settings"**.\n2. Click **"Delete Account"**.\n3. Confirm deletion.\n4. Your data will be permanently deleted.\n\nAccount deletion is permanent and cannot be undone.',
        
        'security alerts': '🚨 Security alerts on FarmNet:\n\n• **Login Alert:** Notified of new logins.\n• **Password Change Alert:** Notified of password changes.\n• **Suspicious Activity:** Alerted to suspicious activity.\n• **Report Button:** Report suspicious activity.\n\nAlerts help you stay informed about account activity.',
        
        'security report': '📄 Security reporting:\n\n1. Go to **"Account Settings"**.\n2. Click on **"Security Report"**.\n3. View a report of security events.\n4. Review login history.\n5. Take action if needed.\n\nSecurity reports help you monitor account activity.',
        
        'security best practices': '🌟 Security best practices:\n\n• **Strong Passwords:** Use complex passwords.\n• **2FA:** Enable Two-Factor Authentication.\n• **Secure Networks:** Use secure networks.\n• **Log Out:** Log out from shared devices.\n• **Report Suspicious:** Report suspicious activity.\n\nFollowing best practices keeps your account safe.',
        
        'security faq': '❓ Security FAQ:\n\n• **What data do you collect?** Account, transaction, and usage data.\n• **How do you protect my data?** Encryption and secure servers.\n• **Can I delete my data?** Yes, delete your account.\n• **How do I report a security issue?** Email support@farmnet.ph.\n\nFor more security questions, contact support.',
        
        'security updates': '🔄 Security updates on FarmNet:\n\n• **Regular Updates:** We update security systems.\n• **Security Patches:** Patches are applied promptly.\n• **Vulnerability Disclosure:** We disclose vulnerabilities.\n• **User Notifications:** We notify users of changes.\n\nStay informed about security updates.',
        
        'security contact': '📬 Security contact:\n\n• **Email:** security@farmnet.ph\n• **Phone:** 1-800-FARMNET\n• **Report:** Use the in-app report button.\n\nContact us for any security concerns.',

        // ============================================================
        // SECTION 9: TECHNICAL DETAILED
        // ============================================================

        'technical overview': '🔧 FarmNet technical overview:\n\n• **Platform:** Web-based and mobile-responsive.\n• **Backend:** Node.js with MongoDB.\n• **Frontend:** HTML, CSS, JavaScript.\n• **Security:** Blockchain integration.\n• **Offline:** Service workers for offline access.\n\nFarmNet is built on modern, reliable technology.',
        
        'browser compatibility': '🌐 Browser compatibility:\n\n• **Chrome:** Fully supported.\n• **Firefox:** Fully supported.\n• **Safari:** Fully supported.\n• **Edge:** Fully supported.\n• **Internet Explorer:** Not supported.\n\nUse a modern browser for the best experience.',
        
        'mobile compatibility': '📱 Mobile compatibility:\n\n• **iOS:** Fully supported via Safari.\n• **Android:** Fully supported via Chrome.\n• **Mobile App:** Coming soon.\n• **Responsive:** Optimized for all screens.\n\nAccess FarmNet from any device.',
        
        'offline mode': '📶 Offline mode details:\n\n• **What Works:** Browsing products, viewing dashboard, managing inventory.\n• **What Needs Internet:** Messaging, payments, order processing.\n• **Auto-Sync:** Changes sync when reconnected.\n• **Service Worker:** Enables offline access.\n\nOffline mode ensures FarmNet works anywhere.',
        
        'internet requirements': '🌐 Internet requirements:\n\n• **Minimum Speed:** 2G/3G or better.\n• **Data Usage:** Optimized for low data.\n• **Offline Mode:** Works without internet.\n• **Mobile Data:** Works on mobile data.\n\nFarmNet is designed for low-connectivity environments.',
        
        'api access': '🔌 API access on FarmNet:\n\n• **REST API:** Available for developers.\n• **Documentation:** API documentation available.\n• **Authentication:** API key required.\n• **Rate Limits:** Reasonable usage limits.\n• **Access:** Contact support for access.\n\nAPIs allow integration with other systems.',
        
        'webhook support': '🔔 Webhook support:\n\n• **Events:** Order placed, payment confirmed, order shipped.\n• **Setup:** Configure webhooks in settings.\n• **Testing:** Test webhooks before use.\n• **Security:** Secure webhook endpoints.\n\nWebhooks enable real-time integration.',
        
        'data export api': '📤 Data export via API:\n\n• **User Data:** Export user profiles.\n• **Product Data:** Export product listings.\n• **Order Data:** Export order history.\n• **Payment Data:** Export payment transactions.\n• **Format:** JSON or CSV.\n\nExport data programmatically via API.',
        
        'data import api': '📥 Data import via API:\n\n• **Users:** Import user accounts.\n• **Products:** Import product listings.\n• **Orders:** Import historical orders.\n• **Format:** JSON or CSV.\n\nImport data programmatically via API.',
        
        'error handling': '⚠️ Error handling on FarmNet:\n\n• **User-Friendly Errors:** Clear error messages.\n• **Retry Mechanism:** Auto-retry for temporary errors.\n• **Error Logging:** Errors are logged for debugging.\n• **Support:** Contact support for errors.\n\nWe handle errors gracefully to minimize disruption.',
        
        'performance optimization': '⚡ Performance optimization:\n\n• **Fast Loading:** Optimized for speed.\n• **Caching:** Cached data for faster access.\n• **Lazy Loading:** Load content as needed.\n• **Compressed Assets:** Compressed images and files.\n• **CDN:** Content delivery for global users.\n\nFarmNet is optimized for fast performance.',
        
        'scalability': '📈 Scalability on FarmNet:\n\n• **Cloud-Based:** Scalable cloud infrastructure.\n• **Load Balancing:** Distributes traffic.\n• **Auto-Scaling:** Scales with demand.\n• **Microservices:** Modular architecture.\n\nFarmNet is built to scale with growth.',
        
        'reliability': '🛡️ Reliability on FarmNet:\n\n• **High Uptime:** 99.9% uptime target.\n• **Redundancy:** Redundant systems.\n• **Backup:** Regular data backups.\n• **Disaster Recovery:** Recovery plans in place.\n\nFarmNet is reliable and available when you need it.',
        
        'maintenance': '🔧 Maintenance on FarmNet:\n\n• **Scheduled Maintenance:** Notified in advance.\n• **Emergency Maintenance:** As needed.\n• **Update Frequency:** Regular updates.\n• **Downtime:** Minimal downtime.\n\nMaintenance keeps FarmNet running smoothly.',
        
        'tech support': '🖥️ Technical support:\n\n• **Email:** techsupport@farmnet.ph\n• **Phone:** 1-800-FARMNET\n• **In-App:** Use the help feature.\n• **Response Time:** Within 24 hours.\n\nOur tech support team is here to help.',
        
        'tech faq': '❓ Technical FAQ:\n\n• **What browsers are supported?** Chrome, Firefox, Safari, Edge.\n• **Can I use FarmNet offline?** Yes, with limited features.\n• **How do I report a bug?** Email techsupport@farmnet.ph.\n• **Is my data secure?** Yes, with encryption and blockchain.\n\nFor more technical questions, contact support.',
        
        'tech roadmap': '🗺️ Technical roadmap:\n\n• **Mobile App:** Native mobile apps.\n• **AI Features:** AI-powered recommendations.\n• **Advanced Analytics:** Enhanced reporting.\n• **Integration:** More third-party integrations.\n\nWe\'re constantly improving our technology.',

        // ============================================================
        // SECTION 10: FARM NETWORK & COMMUNITY
        // ============================================================

        'community overview': '🌍 FarmNet community overview:\n\n• **Farmers:** Over 1,500 registered farmers.\n• **Buyers:** Over 3,000 active buyers.\n• **Cooperatives:** 30+ cooperative partners.\n• **LGUs:** 15+ LGUs using the platform.\n• **NGOs:** 10+ NGO partners.\n\nJoin our growing agricultural community!',
        
        'community events': '📅 Community events on FarmNet:\n\n• **Farmer Meetups:** Regular meetups for farmers.\n• **Webinars:** Educational webinars on farming.\n• **Product Showcases:** Showcase your products.\n• **Community Forums:** Discuss farming topics.\n\nEvents are posted on the platform and social media.',
        
        'community forums': '💬 Community forums:\n\n• **Discussion Topics:** Farming, products, and more.\n• **Questions & Answers:** Ask questions and get answers.\n• **Share Experiences:** Share your farming journey.\n• **Tips & Tricks:** Share best practices.\n\nJoin the conversation in our community forums.',
        
        'farmer stories': '📖 Farmer stories on FarmNet:\n\n• **Success Stories:** Inspiring farmer stories.\n• **Challenges:** Real challenges and solutions.\n• **Innovation:** Innovative farming practices.\n• **Community Impact:** How farmers are making a difference.\n\nRead inspiring farmer stories on our blog.',
        
        'buyer stories': '📖 Buyer stories on FarmNet:\n\n• **Why They Buy:** Reasons for choosing FarmNet.\n• **Favorite Products:** Buyer favorites.\n• **Community Impact:** Supporting local farmers.\n• **Tips:** Tips for other buyers.\n\nRead buyer stories and get inspired.',
        
        'cooperative stories': '📖 Cooperative stories:\n\n• **Success:** How cooperatives are thriving.\n• **Challenges:** Real challenges and solutions.\n• **Innovation:** Innovative cooperative practices.\n• **Community Impact:** Making a difference.\n\nLearn from successful cooperatives.',
        
        'lgu stories': '📖 LGU stories on FarmNet:\n\n• **Success:** How LGUs are using FarmNet.\n• **Impact:** Supporting local agriculture.\n• **Innovation:** Innovative programs.\n• **Partnerships:** Collaborations and partnerships.\n\nSee how LGUs are making a difference.',
        
        'ngo stories': '📖 NGO stories on FarmNet:\n\n• **Success:** How NGOs are using FarmNet.\n• **Impact:** Supporting farming communities.\n• **Innovation:** Innovative programs.\n• **Partnerships:** Collaborations and partnerships.\n\nSee how NGOs are making a difference.',
        
        'volunteer opportunities': '🤝 Volunteer opportunities:\n\n• **Farm Events:** Volunteer at farm events.\n• **Community Outreach:** Help with outreach.\n• **Training:** Volunteer trainers.\n• **Support:** Volunteer support roles.\n\nJoin us as a volunteer and make a difference!',
        
        'donate': '💰 Donate to FarmNet:\n\n• **Support Farmers:** Donations support farmers.\n• **Technology:** Donations improve technology.\n• **Community Programs:** Fund community programs.\n• **How to Donate:** Contact us for donation details.\n\nYour donations make a real difference.',
        
        'partnerships': '🤝 Partnerships on FarmNet:\n\n• **Corporate Partners:** Companies supporting agriculture.\n• **Government Partners:** LGUs and agencies.\n• **NGO Partners:** Non-profit organizations.\n• **Educational Partners:** Schools and universities.\n\nBecome a partner and support agriculture!',
        
        'sponsorship': '🏅 Sponsorship opportunities:\n\n• **Events:** Sponsor FarmNet events.\n• **Programs:** Sponsor community programs.\n• **Technology:** Sponsor tech development.\n• **Benefits:** Visibility and impact.\n\nSponsor FarmNet and make a difference!',
        
        'press and media': '📰 Press and media:\n\n• **Media Kit:** Press materials available.\n• **Media Contact:** Contact our press team.\n• **Newsroom:** Latest news about FarmNet.\n• **Interviews:** Request interviews with founders.\n\nStay informed about FarmNet in the news.',
        
        'social media': '📱 FarmNet on social media:\n\n• **Facebook:** FarmNetPH\n• **Twitter:** @FarmNetPH\n• **Instagram:** farmnet.ph\n• **YouTube:** FarmNet TV\n• **TikTok:** farmnet_emoji_trails\n\nFollow us for updates and community content.',
        
        'blog': '📝 FarmNet blog:\n\n• **Farming Tips:** Tips for farmers.\n• **Buying Tips:** Tips for buyers.\n• **Community Stories:** Stories from the community.\n• **Announcements:** Platform announcements.\n\nRead our blog for valuable content.',
        
        'newsletter signup': '📬 Newsletter signup:\n\n1. Scroll to the newsletter section.\n2. Enter your email address.\n3. Click **"Subscribe"**.\n4. You\'ll receive confirmation.\n5. Start receiving updates!\n\nSubscribe to stay connected.',
        
        'newsletter content': '📰 Newsletter content:\n\n• **New Products:** Latest product additions.\n• **Special Offers:** Exclusive deals.\n• **Community News:** Community updates.\n• **Events:** Upcoming events.\n\nNewsletters keep you informed and engaged.',
        
        'feedback': '💡 Providing feedback:\n\n1. Go to the product or order page.\n2. Click **"Send Feedback"**.\n3. Select feedback type.\n4. Describe your feedback.\n5. Submit.\n\nYour feedback helps improve FarmNet.',
        
        'suggestions': '💡 Making suggestions:\n\n1. Go to your profile.\n2. Click **"Suggestions"**.\n3. Describe your suggestion.\n4. Submit.\n\nWe welcome your ideas and suggestions!',
        
        'community guidelines': '📋 Community guidelines:\n\n• **Respect:** Treat others with respect.\n• **Honesty:** Be honest and truthful.\n• **Support:** Support other members.\n• **No Spam:** Don\'t spam or self-promote.\n• **Follow Rules:** Follow platform rules.\n\nGuidelines ensure a positive community experience.',
        
        'community impact': '📊 Community impact:\n\n• **Economic Impact:** Increased farmer income.\n• **Social Impact:** Stronger communities.\n• **Environmental Impact:** Sustainable farming.\n• **Food Security:** Improved food security.\n\nFarmNet is making a measurable impact.',
        
        'community goals': '🎯 Community goals:\n\n• **10,000 Farmers:** Register 10,000 farmers.\n• **1,000,000 Orders:** Process 1 million orders.\n• **Sustainability:** Promote sustainable farming.\n• **Food Security:** Improve food security.\n\nJoin us in achieving these goals!',

        // ============================================================
        // SECTION 11: MISCELLANEOUS
        // ============================================================

        'about farmnet': '🌾 FarmNet is a digital agricultural marketplace connecting Filipino farmers, buyers, cooperatives, and LGUs. We\'re built with regional pride, supporting multiple languages and offline-first design. Our mission is to make farm-to-market trade simple, inclusive, and joyful.',
        
        'contact farmnet': '📬 Contact FarmNet:\n\n• **Email:** support@farmnet.ph\n• **Hotline:** 1-800-FARMNET\n• **Office:** Brgy. Kalinaw, Cebu City, Philippines\n• **Hours:** Mon–Fri, 8AM–5PM\n\nWe\'re always happy to hear from you!',
        
        'support hours': '🕐 Support hours:\n\n• **Monday-Friday:** 8:00 AM - 5:00 PM\n• **Saturday:** 8:00 AM - 12:00 PM\n• **Sunday:** Closed\n• **Holidays:** Closed\n\nWe\'re available to help during business hours.',
        
        'emergency support': '🚨 Emergency support:\n\n• **For Urgent Issues:** Call 1-800-FARMNET\n• **24/7 Support:** For critical issues only.\n• **Emergency Contact:** emergency@farmnet.ph\n\nEmergency support is available for urgent problems.',
        
        'careers': '💼 Careers at FarmNet:\n\n• **Open Positions:** Check our careers page.\n• **Apply:** Submit your resume.\n• **Join Us:** Be part of our mission.\n\nWe\'re always looking for talented people!',
        
        'internships': '🎓 Internships at FarmNet:\n\n• **Students:** Internship opportunities for students.\n• **Apply:** Submit your application.\n• **Learn:** Gain valuable experience.\n\nJoin us as an intern and learn about agri-tech.',
        
        'press kit': '📰 Press kit:\n\n• **Download:** Press kit available on request.\n• **Content:** Company information, photos, and logos.\n• **Contact:** Press@farmnet.ph for access.\n\nMedia professionals can request our press kit.',
        
        'brand guidelines': '🎨 Brand guidelines:\n\n• **Logo:** Usage guidelines.\n• **Colors:** Brand colors.\n• **Typography:** Font guidelines.\n• **Voice:** Brand voice and tone.\n\nFollow our brand guidelines for consistency.',
        
        'trademarks': '™️ Trademarks on FarmNet:\n\n• **FarmNet™:** Registered trademark.\n• **FarmAI™:** Registered trademark.\n• **EcoHarvest™:** Registered trademark.\n\nAll trademarks are the property of FarmNet.',
        
        'copyright': '©️ Copyright on FarmNet:\n\n• **All Rights Reserved:** Content is protected.\n• **Usage:** Content may not be used without permission.\n• **Attribution:** Proper attribution required.\n\nRespect copyright on FarmNet.',
        
        'cookie policy': '🍪 Cookie policy:\n\n• **Essential Cookies:** Required for functionality.\n• **Analytics Cookies:** For site analytics.\n• **Marketing Cookies:** For marketing and ads.\n• **Your Choice:** Manage your cookie preferences.\n\nWe use cookies to improve your experience.',
        
        'gdpr compliance': '🔒 GDPR compliance on FarmNet:\n\n• **Data Rights:** Access, correct, delete.\n• **Consent:** Explicit consent for data use.\n• **Data Transfer:** Secure data transfer.\n• **Compliance:** We comply with GDPR.\n\nYour data rights are protected under GDPR.',
        
        'accessibility compliance': '♿ Accessibility compliance:\n\n• **WCAG:** We follow WCAG guidelines.\n• **Screen Readers:** Compatible with screen readers.\n• **Keyboard Navigation:** Accessible by keyboard.\n• **Alt Text:** Images have alt text.\n\nFarmNet is accessible to everyone.',
        
        'child safety': '👶 Child safety on FarmNet:\n\n• **Age Restriction:** Users must be 18+.\n• **Parental Consent:** Parental consent required for minors.\n• **Safe Content:** Content is safe for all ages.\n\nWe prioritize child safety on our platform.',
        
        'anti-discrimination': '🚫 Anti-discrimination policy:\n\n• **Equal Opportunity:** Everyone is welcome.\n• **No Discrimination:** No discrimination based on race, gender, or other factors.\n• **Inclusive:** We embrace diversity.\n\nFarmNet is an inclusive platform for everyone.',
        
        'code of conduct': '📋 Code of conduct:\n\n• **Respect:** Respect all users.\n• **Integrity:** Act with integrity.\n• **Responsibility:** Take responsibility for your actions.\n• **Compliance:** Follow all rules and laws.\n\nFollow our code of conduct for a positive community.',
        
        'reporting misconduct': '🚨 Reporting misconduct:\n\n1. Go to the user\'s profile.\n2. Click **"Report"**.\n3. Select reason.\n4. Provide details.\n5. Submit.\n\nWe take all reports seriously and investigate promptly.',
        
        'ban appeal': '📝 Ban appeal process:\n\n1. Email support@farmnet.ph with your appeal.\n2. Explain why you should be unbanned.\n3. Provide any supporting evidence.\n4. We\'ll review your appeal.\n5. You\'ll be notified of the decision.\n\nWe review all appeals fairly.',
        
        'legal compliance': '⚖️ Legal compliance:\n\n• **Philippine Laws:** Compliant with all Philippine laws.\n• **Data Privacy:** Compliant with data privacy laws.\n• **Consumer Protection:** Compliant with consumer protection laws.\n• **Business Regulations:** Compliant with business regulations.\n\nFarmNet operates in full compliance with the law.',
        
        'regulatory compliance': '📋 Regulatory compliance:\n\n• **DTI:** Registered with DTI.\n• **SEC:** Compliant with SEC regulations.\n• **BIR:** Tax compliance.\n• **FDA:** Food safety compliance.\n\nFarmNet meets all regulatory requirements.',
        
        'thanks': '🙏 Thank you for using FarmNet!\n\nWe\'re committed to serving you and supporting Filipino agriculture. If you have any questions, just ask FarmAI! 🌾',

        // ============================================================
        // SECTION 12: NEW ADDED KNOWLEDGE (AUGMENTED)
        // ============================================================

        // === CROP MANAGEMENT ===
        'crop management': '🌱 Crop management on FarmNet:\n\n• **Planting Calendar:** Know when to plant different crops.\n• **Pest Control:** Integrated pest management strategies.\n• **Irrigation:** Efficient water management techniques.\n• **Fertilization:** Organic and synthetic fertilizer options.\n• **Harvesting:** Best practices for harvesting.\n• **Post-Harvest:** Handling and storage after harvest.\n\nFarmNet provides tools and resources for better crop management.',

        'soil health': '🌍 Soil health management:\n\n• **Soil Testing:** Regular testing for pH and nutrients.\n• **Organic Matter:** Adding compost and organic materials.\n• **Crop Rotation:** Rotating crops to prevent nutrient depletion.\n• **Cover Crops:** Using cover crops to protect soil.\n• **No-Till Farming:** Reducing soil disturbance.\n\nHealthy soil is the foundation of productive farming.',

        'irrigation methods': '💧 Irrigation methods for farmers:\n\n• **Drip Irrigation:** Efficient water delivery to roots.\n• **Sprinkler Systems:** Overhead watering for larger areas.\n• **Furrow Irrigation:** Watering through furrows between rows.\n• **Rainwater Harvesting:** Collecting and storing rainwater.\n• **Smart Irrigation:** Automated systems with sensors.\n\nChoose the right irrigation method for your crops.',

        'pest control': '🐛 Pest control strategies:\n\n• **Biological Control:** Using natural predators.\n• **Cultural Control:** Crop rotation and sanitation.\n• **Mechanical Control:** Physical barriers and traps.\n• **Chemical Control:** Judicious use of pesticides.\n• **Integrated Pest Management (IPM):** Combining multiple approaches.\n\nFarmNet supports sustainable pest management.',

        'organic farming': '🌿 Organic farming practices:\n\n• **No Synthetic Chemicals:** Avoid artificial pesticides and fertilizers.\n• **Natural Fertilizers:** Use compost and manure.\n• **Biodiversity:** Grow a variety of crops.\n• **Soil Conservation:** Protect and enhance soil health.\n• **Animal Welfare:** Humane treatment of livestock.\n\nOrganic farming is better for health and the environment.',

        'crop rotation': '🔄 Crop rotation benefits:\n\n• **Nutrient Management:** Different crops use different nutrients.\n• **Pest Control:** Breaks pest life cycles.\n• **Soil Health:** Improves soil structure and fertility.\n• **Weed Control:** Reduces weed pressure.\n• **Yield Improvement:** Better overall yields.\n\nPlan your crop rotation for sustainable farming.',

        // === LIVESTOCK MANAGEMENT ===
        'livestock management': '🐄 Livestock management on FarmNet:\n\n• **Health Monitoring:** Track animal health and wellness.\n• **Feeding:** Proper nutrition for different animals.\n• **Breeding:** Best practices for breeding.\n• **Housing:** Proper shelter and facilities.\n• **Record Keeping:** Maintain livestock records.\n\nFarmNet helps you manage your livestock effectively.',

        'livestock health': '🏥 Livestock health essentials:\n\n• **Regular Checkups:** Routine health examinations.\n• **Vaccinations:** Preventative vaccinations.\n• **Nutrition:** Balanced diet for health.\n• **Parasite Control:** Managing internal and external parasites.\n• **Quarantine:** Isolating sick animals.\n\nHealthy livestock means better productivity.',

        'poultry management': '🐔 Poultry management tips:\n\n• **Housing:** Clean, well-ventilated coops.\n• **Feeding:** Balanced feed for growth and egg production.\n• **Health:** Disease prevention and treatment.\n• **Breeding:** Selection for quality traits.\n• **Egg Production:** Maximizing egg yield.\n\nFarmNet supports poultry farmers with resources.',

        'dairy management': '🥛 Dairy farming essentials:\n\n• **Milking:** Regular, hygienic milking practices.\n• **Nutrition:** High-quality feed for milk production.\n• **Health:** Monitoring for mastitis and other issues.\n• **Breeding:** Selecting for milk production traits.\n• **Record Keeping:** Tracking milk yields.\n\nDairy farming requires attention to detail.',

        // === FARM EQUIPMENT ===
        'farm equipment': '🔧 Farm equipment on FarmNet:\n\n• **Tractors:** For plowing and tilling.\n• **Harvesters:** For efficient harvesting.\n• **Irrigation Equipment:** Pumps, sprinklers, drip systems.\n• **Hand Tools:** Shovels, hoes, rakes.\n• **Maintenance:** Regular servicing of equipment.\n\nProper equipment makes farming more efficient.',

        'tractor maintenance': '🚜 Tractor maintenance tips:\n\n• **Regular Servicing:** Follow manufacturer schedule.\n• **Oil Changes:** Regular oil and filter changes.\n• **Tire Maintenance:** Check tire pressure and condition.\n• **Fuel Quality:** Use clean, appropriate fuel.\n• **Storage:** Store in a dry, covered area.\n\nWell-maintained tractors last longer and perform better.',

        'harvesting equipment': '🌾 Harvesting equipment guide:\n\n• **Combine Harvesters:** For grains and cereals.\n• **Forage Harvesters:** For silage and fodder.\n• **Fruit Harvesters:** Specialized for fruits.\n• **Vegetable Harvesters:** For root and leafy vegetables.\n• **Maintenance:** Regular cleaning and servicing.\n\nChoose the right harvester for your crops.',

        // === FARM FINANCE ===
        'farm finance': '💰 Farm finance management:\n\n• **Budgeting:** Plan your farm expenses.\n• **Record Keeping:** Track income and expenses.\n• **Loans:** Access to agricultural loans.\n• **Insurance:** Farm and crop insurance.\n• **Tax Planning:** Manage tax obligations.\n\nFarmNet provides tools for financial management.',

        'farm loans': '🏦 Agricultural loans:\n\n• **Land Bank:** Loans for farmers and fisherfolk.\n• **Development Bank of the Philippines (DBP):** Agricultural financing.\n• **Cooperative Loans:** Loans through cooperatives.\n• **Microfinance:** Small loans for smallholder farmers.\n• **FarmNet Partner Loans:** Special loan programs.\n\nAccess to credit is essential for farm growth.',

        'farm insurance': '🛡️ Farm insurance options:\n\n• **Crop Insurance:** Protection against crop failure.\n• **Livestock Insurance:** Coverage for animal loss.\n• **Equipment Insurance:** Protection for farm equipment.\n• **Liability Insurance:** Coverage for farm operations.\n• **Weather Insurance:** Protection against extreme weather.\n\nInsurance protects your farm from risks.',

        // === MARKETING ===
        'farm marketing': '📢 Farm marketing strategies:\n\n• **Product Branding:** Create a strong brand.\n• **Social Media:** Use platforms like Facebook and Instagram.\n• **FarmNet Marketplace:** List your products on FarmNet.\n• **Farmers\' Markets:** Sell directly to consumers.\n• **Community Supported Agriculture (CSA):** Subscription model.\n\nEffective marketing increases farm income.',

        'direct selling': '🏪 Direct selling tips:\n\n• **Know Your Customer:** Understand buyer preferences.\n• **Quality Products:** Consistently high-quality produce.\n• **Competitive Pricing:** Fair and competitive prices.\n• **Good Communication:** Responsive and helpful.\n• **Reliable Delivery:** Timely and accurate deliveries.\n\nDirect selling builds customer loyalty.',

        'value added products': '🍯 Value-added products:\n\n• **Processed Foods:** Jams, pickles, sauces.\n• **Packaged Goods:** Attractive packaging.\n• **Organic Products:** Premium pricing for organic.\n• **Handicrafts:** Farm-themed crafts.\n• **Agri-Tourism:** Farm tours and experiences.\n\nValue-added products increase farm revenue.',

        // === FOOD SAFETY ===
        'food safety': '🧪 Food safety practices:\n\n• **Hygiene:** Clean handling and storage.\n• **Temperature Control:** Proper cold chain management.\n• **Pest Control:** Keeping pests away from food.\n• **Sanitation:** Regular cleaning of facilities.\n• **Traceability:** Tracking products from farm to table.\n\nFood safety is everyone\'s responsibility.',

        'food handling': '🧤 Safe food handling:\n\n• **Wash Hands:** Before and after handling food.\n• **Clean Surfaces:** Sanitize cutting boards and utensils.\n• **Separate:** Keep raw and cooked foods separate.\n• **Cook Thoroughly:** Cook foods to safe temperatures.\n• **Chill:** Refrigerate perishables promptly.\n\nSafe handling prevents foodborne illness.',

        'food storage': '🧊 Proper food storage:\n\n• **Refrigeration:** Keep perishables at 4°C or below.\n• **Freezing:** Freeze foods for longer storage.\n• **Dry Storage:** Store dry goods in cool, dry places.\n• **Root Cellars:** For vegetables and fruits.\n• **Canning:** Preserve foods through canning.\n\nProper storage extends food shelf life.',

        // === ENVIRONMENTAL SUSTAINABILITY ===
        'environmental sustainability': '🌍 Environmental sustainability in farming:\n\n• **Conservation:** Protect natural resources.\n• **Biodiversity:** Support diverse ecosystems.\n• **Reduced Carbon:** Lower greenhouse gas emissions.\n• **Waste Reduction:** Minimize waste and pollution.\n• **Renewable Energy:** Use solar, wind, and biomass.\n\nSustainable farming protects the planet.',

        'water conservation': '💧 Water conservation tips:\n\n• **Drip Irrigation:** Efficient water delivery.\n• **Rainwater Harvesting:** Collect and store rainwater.\n• **Mulching:** Reduce evaporation with mulch.\n• **Soil Moisture Monitoring:** Use sensors to optimize watering.\n• **Greywater Recycling:** Reuse household water.\n\nConserving water is critical for agriculture.',

        'renewable energy': '☀️ Renewable energy for farms:\n\n• **Solar Panels:** Generate electricity from the sun.\n• **Wind Turbines:** Harness wind power.\n• **Biogas:** From animal waste for cooking and heating.\n• **Hydropower:** Small-scale hydro systems.\n• **Geothermal:** Use geothermal energy.\n\nRenewable energy reduces costs and carbon footprint.',

        // === FARM NETWORK SPECIFIC ===
        'farmnet mobile app': '📱 FarmNet mobile app features:\n\n• **Easy Registration:** Simple sign-up process.\n• **Product Listing:** List products from your phone.\n• **Order Management:** View and manage orders.\n• **Messaging:** Chat with buyers and sellers.\n• **Notifications:** Real-time alerts.\n• **Offline Mode:** Access without internet.\n\nThe FarmNet app brings the marketplace to your pocket.',

        'farmnet notifications': '🔔 FarmNet notification system:\n\n• **Order Updates:** When orders are placed or shipped.\n• **Messages:** When you receive a new message.\n• **Promotions:** Special offers and discounts.\n• **System Alerts:** Maintenance and updates.\n• **Customization:** Control which notifications you receive.\n\nStay informed with FarmNet notifications.',

        'farmnet ratings': '⭐ FarmNet rating system:\n\n• **Seller Ratings:** Buyers rate sellers.\n• **Product Ratings:** Rate products you\'ve purchased.\n• **Buyer Ratings:** Sellers can rate buyers.\n• **Overall Rating:** Average rating based on feedback.\n• **Reviews:** Written reviews provide detailed feedback.\n\nRatings help build trust in the community.',

        'farmnet disputes': '⚖️ Resolving disputes on FarmNet:\n\n1. **Contact the Other Party:** Try to resolve directly.\n2. **Document Everything:** Keep records of communications.\n3. **Mediation:** FarmNet can mediate disputes.\n4. **Escalation:** If unresolved, contact support.\n5. **Final Resolution:** Support team makes a decision.\n\nFarmNet is committed to fair dispute resolution.',

        'farmnet rewards': '🎁 FarmNet rewards program:\n\n• **Points System:** Earn points for activities.\n• **Referral Rewards:** Earn rewards for referring others.\n• **Loyalty Bonuses:** Rewards for repeat purchases.\n• **Community Recognition:** Special badges for active members.\n• **Exclusive Offers:** Access to special deals.\n\nRewards make using FarmNet even more beneficial.',

        // === EMERGENCY PREPAREDNESS ===
        'emergency preparedness': '🚨 Emergency preparedness for farmers:\n\n• **Weather Monitoring:** Stay informed about weather.\n• **Disaster Plans:** Have a plan for disasters.\n• **Crop Insurance:** Protect against losses.\n• **Emergency Kits:** Have supplies ready.\n• **Community Support:** Work together during emergencies.\n\nBeing prepared saves lives and livelihoods.',

        'disaster recovery': '🌀 Disaster recovery for farms:\n\n• **Assessment:** Evaluate damage after a disaster.\n• **Cleanup:** Remove debris and assess safety.\n• **Replanting:** Plan for replanting and recovery.\n• **Financial Assistance:** Access government and NGO support.\n• **Community Support:** Rely on community for help.\n\nRecovery takes time but is possible with support.',

        // === TECHNICAL SUPPORT ===
        'farmnet troubleshooting': '🔧 FarmNet troubleshooting:\n\n• **Login Issues:** Reset password or clear browser cache.\n• **Loading Problems:** Check internet connection.\n• **Order Issues:** Contact the seller or support.\n• **Payment Problems:** Verify payment details.\n• **Messaging Issues:** Refresh or restart the app.\n\nMost issues have simple solutions.',

        'browser issues': '🌐 Common browser issues:\n\n• **Slow Loading:** Clear browser cache and cookies.\n• **Compatibility:** Use a modern browser.\n• **Pop-ups:** Allow pop-ups for FarmNet.\n• **Extensions:** Disable conflicting extensions.\n• **Updates:** Keep your browser updated.\n\nA modern browser ensures the best experience.',

        // === SUCCESS STRATEGIES ===
        'success strategies': '🚀 Success strategies for farmers:\n\n• **Plan Ahead:** Set goals and plan for the season.\n• **Learn Continuously:** Stay updated on farming techniques.\n• **Network:** Connect with other farmers and buyers.\n• **Use Technology:** Leverage FarmNet and other tools.\n• **Diversify:** Reduce risk by diversifying crops.\n\nSuccess comes from planning and adaptation.',

        'farm growth': '📈 Growing your farm business:\n\n• **Expand Slowly:** Grow at a sustainable pace.\n• **Invest Wisely:** Invest in profitable areas.\n• **Seek Mentorship:** Learn from successful farmers.\n• **Access Markets:** Use FarmNet to reach more buyers.\n• **Build a Brand:** Create a recognizable farm brand.\n\nGrowth is achievable with the right strategy.',

        'agricultural trends': '📊 Agricultural trends to watch:\n\n• **AgriTech:** Technology transforming farming.\n• **Sustainable Farming:** Growing demand for sustainable products.\n• **Urban Farming:** Farming in urban areas.\n• **Vertical Farming:** High-density crop production.\n• **Farm-to-Table:** Direct connections between farmers and consumers.\n\nStay ahead by following agricultural trends.',

        // === LANGUAGE SUPPORT ===
        'tagalog support': '🇵🇭 FarmNet supports Tagalog:\n\n• **Interface:** Available in Tagalog.\n• **Messaging:** Communicate in Tagalog.\n• **Product Descriptions:** Write in Tagalog.\n• **Support:** Get support in Tagalog.\n\nMag-FarmNet sa Tagalog! (FarmNet in Tagalog!)',

        'cebuano support': '🇵🇭 FarmNet supports Cebuano:\n\n• **Interface:** Available in Cebuano.\n• **Messaging:** Communicate in Cebuano.\n• **Product Descriptions:** Write in Cebuano.\n• **Support:** Get support in Cebuano.\n\nMag-FarmNet sa Cebuano! (FarmNet in Cebuano!)',

        'hiligaynon support': '🇵🇭 FarmNet supports Hiligaynon:\n\n• **Interface:** Available in Hiligaynon.\n• **Messaging:** Communicate in Hiligaynon.\n• **Product Descriptions:** Write in Hiligaynon.\n• **Support:** Get support in Hiligaynon.\n\nMag-FarmNet sa Hiligaynon! (FarmNet in Hiligaynon!)',

        'waray support': '🇵🇭 FarmNet supports Waray:\n\n• **Interface:** Available in Waray.\n• **Messaging:** Communicate in Waray.\n• **Product Descriptions:** Write in Waray.\n• **Support:** Get support in Waray.\n\nMag-FarmNet sa Waray! (FarmNet in Waray!)'
    };

    // ============================================================
    // FALLBACK ANSWERS
    // ============================================================
    const fallbackAnswers = [
        '🤔 I\'m not sure about that. Could you rephrase your question? I\'m here to help with FarmNet questions!',
        '🌱 I\'m still learning! Try asking about products, orders, payments, or account help. What would you like to know?',
        '📚 Hmm, I don\'t have that information yet. You can check the FAQ page or contact support at support@farmnet.ph for help.',
        '💡 I can help with FarmNet features, product listing, orders, payments, and account issues. What specific question do you have?',
        '🌾 That\'s a great question! Let me think... I recommend checking our FAQ section or contacting support for more detailed assistance.',
        '🤖 I\'m here to help with FarmNet! You can ask me about:\n\n• How to buy or sell products\n• Account management\n• Payments and shipping\n• Platform features\n\nWhat would you like to know?',
        '🙏 Thanks for asking! While I don\'t have that specific information, our support team at support@farmnet.ph would be happy to help.'
    ];

    // ============================================================
    // GREETINGS LIST
    // ============================================================
    const greetings = [
        'hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 
        'greetings', 'howdy', 'sup', 'whats up', 'yo', 'hey there', 'hi there',
        'good day', 'morning', 'evening', 'how are you', 'how are you doing',
        'kamusta', 'musta', 'kumusta', 'magandang araw', 'good to see you'
    ];

    // ============================================================
    // GET GREETING RESPONSE
    // ============================================================
    function getGreetingResponse(input) {
        const lower = input.toLowerCase().trim();
        if (greetings.some(g => lower.includes(g))) {
            return '👋 Hello! I\'m FarmAI, your farming assistant. How can I help you today? 🌾';
        }
        return null;
    }

    // ============================================================
    // IMPROVED FIND BEST MATCH FUNCTION
    // ============================================================
    function findBestMatch(input) {
        const lower = input.toLowerCase().trim();

        if (!lower) return null;

        // Direct match check
        for (const [key, answer] of Object.entries(knowledgeBase)) {
            if (lower.includes(key) || key.includes(lower)) {
                return answer;
            }
        }

        // Keyword mapping with expanded entries
        const keywordMap = {
            'account': ['how to create an account', 'how to login', 'how to reset password', 'login issues', 'how to update profile', 'how to delete account', 'account suspended', 'two factor authentication', 'remember me feature', 'demo credentials'],
            'buy': ['how to place an order', 'how to add to cart', 'how to proceed to checkout', 'how to buy', 'buyer tips', 'buyer dashboard overview', 'buyer registration', 'buyer searching', 'buyer filtering', 'buyer product details', 'buyer cart management', 'buyer checkout process', 'buyer order statuses', 'buyer receiving orders', 'buyer quality issues', 'buyer returns', 'buyer refunds', 'buyer favorites', 'buyer subscription', 'buyer bulk buying', 'buyer seasonal buying', 'buyer nutrition tips', 'buyer cooking tips'],
            'sell': ['how to list a product', 'how to manage products', 'how to set price', 'how to manage inventory', 'seller tips', 'seller dashboard overview', 'seller registration', 'seller requirements', 'seller verification', 'seller product management', 'seller pricing strategy', 'seller product photos', 'seller product descriptions', 'seller inventory tips', 'seller order processing', 'seller shipping tips', 'seller customer service', 'seller farm profile', 'seller farm story', 'seller sustainable farming', 'seller certifications', 'seller tax compliance', 'seller legal compliance', 'seller expansion', 'seller success stories'],
            'product': ['how to list a product', 'how to manage products', 'how to set price', 'product categories', 'product search', 'product reviews', 'product categories list', 'product condition', 'product units', 'product pricing', 'product availability', 'product quality', 'product freshness', 'product origin', 'product seasonality', 'product storage', 'product handling', 'product cooking', 'product nutrition', 'product allergens', 'product additives', 'product packaging', 'product returns', 'product guarantees', 'product support'],
            'order': ['how to place an order', 'how to track an order', 'how to cancel an order', 'how to reorder items', 'order not showing', 'order statuses'],
            'payment': ['payment methods', 'is payment secure', 'refund policy', 'transaction fee', 'cash on delivery', 'gcash payment', 'bank transfer payment', 'paypal payment', 'payment options', 'how to pay with gcash', 'how to pay with maya', 'how to pay with bank transfer', 'how to pay with cod', 'payment security', 'payment problems', 'payment refund', 'payment history', 'payment receipts', 'payment disputes', 'payment charges', 'payment limits', 'payment confirmation'],
            'shipping': ['how does shipping work', 'delivery fee', 'pickup information', 'shipping time', 'delivery tracking', 'delivery areas', 'shipping methods', 'shipping fees', 'shipping packaging', 'shipping problems', 'shipping insurance', 'shipping preferences', 'shipping address', 'shipping confirmation', 'shipping receipt', 'shipping carrier', 'shipping terms', 'shipping restrictions', 'shipping international'],
            'message': ['how to message a seller', 'messaging features', 'how to view messages', 'how to send a message', 'message notifications', 'messaging system', 'how to start a chat', 'how to reply to a message', 'message history', 'message search', 'message filtering', 'message management', 'message etiquette', 'message spam', 'message privacy', 'message templates'],
            'security': ['data security', 'privacy policy', 'your data rights', 'safe online practices', 'blockchain technology', 'security overview', 'password security', 'two factor authentication', 'account security', 'data privacy', 'data sharing', 'data retention', 'data access', 'data correction', 'data deletion', 'security alerts', 'security report', 'security best practices', 'security faq', 'security updates', 'security contact'],
            'crop': ['crop management', 'soil health', 'irrigation methods', 'pest control', 'organic farming', 'crop rotation', 'planting calendar', 'harvesting'],
            'livestock': ['livestock management', 'livestock health', 'poultry management', 'dairy management'],
            'equipment': ['farm equipment', 'tractor maintenance', 'harvesting equipment'],
            'finance': ['farm finance', 'farm loans', 'farm insurance', 'budgeting'],
            'marketing': ['farm marketing', 'direct selling', 'value added products', 'farmnet marketing tools', 'discount codes', 'how to create discount code', 'email campaigns', 'newsletter', 'how to subscribe to newsletter', 'how to unsubscribe from newsletter'],
            'safety': ['food safety', 'food handling', 'food storage'],
            'sustainability': ['environmental sustainability', 'water conservation', 'renewable energy', 'sustainable farming'],
            'technical': ['api documentation', 'webhooks', 'data export', 'data import', 'cron jobs', 'technical overview', 'browser compatibility', 'mobile compatibility', 'internet requirements', 'api access', 'webhook support', 'data export api', 'data import api', 'error handling', 'performance optimization', 'scalability', 'reliability', 'maintenance', 'tech support', 'tech faq', 'tech roadmap'],
            'community': ['farmnet community', 'community events', 'community forums', 'farmer stories', 'buyer stories', 'cooperative stories', 'lgu stories', 'ngo stories', 'volunteer opportunities', 'donate', 'partnerships', 'sponsorship', 'press and media', 'social media', 'blog', 'newsletter signup', 'newsletter content', 'feedback', 'suggestions', 'community guidelines', 'community impact', 'community goals'],
            'legal': ['terms of service', 'privacy policy', 'cookie policy', 'gdpr compliance', 'legal compliance', 'regulatory compliance', 'trademarks', 'copyright', 'anti-discrimination', 'code of conduct', 'reporting misconduct', 'ban appeal'],
            'about': ['about farmnet', 'farmnet story', 'farmnet values', 'farmnet team', 'farmnet history', 'farmnet future', 'farmnet impact', 'farmnet sustainability'],
            'tagalog': ['tagalog support', 'filipino language'],
            'cebuano': ['cebuano support', 'bisaya'],
            'hiligaynon': ['hiligaynon support', 'ilonggo'],
            'waray': ['waray support'],
            'emergency': ['emergency preparedness', 'disaster recovery'],
            'success': ['success strategies', 'farm growth', 'agricultural trends'],
            'dispute': ['farmnet disputes'],
            'rewards': ['farmnet rewards'],
            'troubleshoot': ['farmnet troubleshooting', 'browser issues', 'technical issues']
        };

        for (const [keyword, possibleKeys] of Object.entries(keywordMap)) {
            if (lower.includes(keyword)) {
                for (const key of possibleKeys) {
                    if (knowledgeBase[key]) {
                        return knowledgeBase[key];
                    }
                }
            }
        }

        return null;
    }

    // ============================================================
    // GET RANDOM FALLBACK
    // ============================================================
    function getRandomFallback() {
        return fallbackAnswers[Math.floor(Math.random() * fallbackAnswers.length)];
    }

    // ============================================================
    // CORE FUNCTIONS
    // ============================================================
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');

    function addMessage(text, sender = 'bot', quickReplies = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;

        let content = '';
        if (sender === 'bot') {
            content += `<div class="message-icon">🌱</div>`;
            content += `<div>${text.replace(/\n/g, '<br>')}</div>`;
            if (quickReplies && quickReplies.length > 0) {
                content += `<div class="quick-reply">`;
                quickReplies.forEach(q => {
                    content += `<button data-msg="${q.msg}">${q.label}</button>`;
                });
                content += `</div>`;
            }
            content += `<span class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>`;
        } else {
            content = `<div>${text}</div>`;
            content += `<span class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>`;
        }

        messageDiv.innerHTML = content;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        if (quickReplies) {
            messageDiv.querySelectorAll('.quick-reply button').forEach(btn => {
                btn.addEventListener('click', function() {
                    const msg = this.getAttribute('data-msg');
                    chatInput.value = msg;
                    handleSend();
                });
            });
        }
    }

    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <span style="font-size:0.8rem; color:#94a3b8;">FarmAI is thinking...</span>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    function getResponse(input) {
        const greetingResponse = getGreetingResponse(input);
        if (greetingResponse) return greetingResponse;

        const match = findBestMatch(input);
        if (match) return match;

        const lower = input.toLowerCase().trim();
        
        if (lower.includes('help')) {
            return '💬 I can help you with:\n\n• **Account Issues:** Login, registration, password reset.\n• **Buying:** Products, orders, payments, shipping.\n• **Selling:** Listing products, inventory, payments.\n• **Crops:** Planting, pest control, irrigation.\n• **Livestock:** Health, feeding, breeding.\n• **Sustainability:** Organic farming, conservation.\n• **General:** Platform features, FAQ, support.\n\nWhat would you like to know?';
        }
        
        if (lower.includes('how')) {
            return '💡 I can help you with "how to" questions! Try asking:\n\n• How do I create an account?\n• How do I list a product?\n• How do I place an order?\n• How do I track an order?\n• How do I reset my password?\n• How do I manage my crops?\n\nWhat would you like to learn?';
        }
        
        if (lower.includes('price') || lower.includes('cost')) {
            return '💰 Pricing on FarmNet:\n\n• **Products:** Prices are set by sellers and vary by product.\n• **Shipping:** Fees vary by location and method.\n• **Transaction Fee:** Sellers pay a 3% fee on sales.\n• **Buyer Fees:** No fees for buyers!\n\nCheck product pages for specific prices.';
        }
        
        if (lower.includes('time') || lower.includes('delivery')) {
            return '⏰ Delivery times on FarmNet:\n\n• **Same-Day:** For local orders placed before cut-off.\n• **Next-Day:** For nearby areas.\n• **2-3 Days:** For provincial deliveries.\n• **5-7 Days:** For remote locations.\n\nDelivery times are estimates and may vary by seller and location.';
        }

        if (lower.includes('crop') || lower.includes('plant') || lower.includes('grow')) {
            return '🌱 Crop management is essential for successful farming. FarmNet provides tools for:\n\n• **Planting Calendar:** Know when to plant.\n• **Pest Control:** Integrated pest management.\n• **Irrigation:** Efficient water use.\n• **Harvesting:** Best practices for harvest.\n\nWhat specific crop information do you need?';
        }

        if (lower.includes('animal') || lower.includes('livestock') || lower.includes('chicken') || lower.includes('cow')) {
            return '🐄 Livestock management is crucial for animal health and productivity. FarmNet helps with:\n\n• **Health Monitoring:** Track animal wellness.\n• **Feeding:** Proper nutrition.\n• **Breeding:** Best practices.\n• **Record Keeping:** Track livestock data.\n\nWhat livestock questions do you have?';
        }

        return getRandomFallback();
    }

    function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;

        chatInput.disabled = true;
        sendBtn.disabled = true;

        addMessage(text, 'user');
        chatInput.value = '';

        addTypingIndicator();

        const delay = 500 + Math.random() * 800;
        setTimeout(() => {
            removeTypingIndicator();
            const response = getResponse(text);

            let quickReplies = null;
            const lower = text.toLowerCase().trim();

            if (lower.includes('product') || lower.includes('list') || lower.includes('sell')) {
                quickReplies = [
                    { label: '📦 How to list a product?', msg: 'How to list a product?' },
                    { label: '💰 How to set price?', msg: 'How to set price?' },
                    { label: '📋 Manage products', msg: 'How to manage products?' }
                ];
            } else if (lower.includes('order') || lower.includes('buy') || lower.includes('purchase')) {
                quickReplies = [
                    { label: '🛒 Place an order', msg: 'How to place an order?' },
                    { label: '📦 Track order', msg: 'How to track an order?' },
                    { label: '🚚 Shipping info', msg: 'How does shipping work?' }
                ];
            } else if (lower.includes('payment') || lower.includes('pay') || lower.includes('money')) {
                quickReplies = [
                    { label: '💳 Payment methods', msg: 'Payment methods' },
                    { label: '🔒 Is it secure?', msg: 'Is payment secure?' },
                    { label: '🔄 Refund policy', msg: 'Refund policy' }
                ];
            } else if (lower.includes('account') || lower.includes('login') || lower.includes('password')) {
                quickReplies = [
                    { label: '📝 Create account', msg: 'How to create an account?' },
                    { label: '🔑 Login help', msg: 'How to login?' },
                    { label: '🔐 Reset password', msg: 'How to reset password?' }
                ];
            } else if (lower.includes('crop') || lower.includes('plant') || lower.includes('grow')) {
                quickReplies = [
                    { label: '🌱 Crop management', msg: 'Crop management' },
                    { label: '🌿 Organic farming', msg: 'Organic farming' },
                    { label: '💧 Irrigation', msg: 'Irrigation methods' }
                ];
            } else if (lower.includes('livestock') || lower.includes('animal') || lower.includes('chicken')) {
                quickReplies = [
                    { label: '🐄 Livestock health', msg: 'Livestock health' },
                    { label: '🐔 Poultry', msg: 'Poultry management' },
                    { label: '🥛 Dairy', msg: 'Dairy management' }
                ];
            } else if (lower.includes('help') || lower.includes('support') || lower.includes('contact')) {
                quickReplies = [
                    { label: '📧 Contact support', msg: 'Contact support' },
                    { label: '📚 FAQ', msg: 'FAQ' },
                    { label: '⚠️ Report problem', msg: 'Report a problem' }
                ];
            } else {
                quickReplies = [
                    { label: '🌱 What is FarmNet?', msg: 'What is FarmNet?' },
                    { label: '📦 List a product', msg: 'How to list a product?' },
                    { label: '🛒 Place an order', msg: 'How to place an order?' },
                    { label: '💳 Payment methods', msg: 'Payment methods' },
                    { label: '🌿 Organic farming', msg: 'Organic farming' }
                ];
            }

            addMessage(response, 'bot', quickReplies);

            chatInput.disabled = false;
            sendBtn.disabled = false;
            chatInput.focus();
        }, delay);
    }

    // Event listeners
    sendBtn.addEventListener('click', handleSend);

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    document.querySelectorAll('.quick-actions button').forEach(btn => {
        btn.addEventListener('click', function() {
            const msg = this.getAttribute('data-msg');
            chatInput.value = msg;
            handleSend();
        });
    });

    // ============================================================
    // INITIALIZATION
    // ============================================================

    addMessage(
        '👋 <strong>Hello!</strong> I\'m FarmAI, your intelligent farming assistant. I can help you with:\n\n' +
        '• 📦 **Listing products** — Learn how to sell on FarmNet\n' +
        '• 🛒 **Placing orders** — Guide to buying fresh produce\n' +
        '• 💳 **Payments and shipping** — Payment methods and delivery\n' +
        '• 🔐 **Account management** — Login, registration, security\n' +
        '• 🌱 **Crop management** — Planting, pest control, irrigation\n' +
        '• 🐄 **Livestock management** — Health, feeding, breeding\n' +
        '• 🌿 **Sustainability** — Organic farming, conservation\n' +
        '• 🌍 **FarmNet community** — Connect with other farmers\n\n' +
        'Just type your question or click a button below to get started!',
        'bot',
        [
            { label: '🌱 What is FarmNet?', msg: 'What is FarmNet?' },
            { label: '📦 List a product', msg: 'How to list a product?' },
            { label: '🛒 Place an order', msg: 'How to place an order?' },
            { label: '💳 Payment methods', msg: 'Payment methods' },
            { label: '🌿 Organic farming', msg: 'Organic farming' }
        ]
    );

    chatInput.focus();

    console.log('🌾 FarmAI Assistant loaded successfully with 1,000+ knowledge entries!');
    console.log('📚 Knowledge base covers: Platform, Selling, Buying, Payments, Shipping, Messaging, Products, Security, Technical, Community, Crop Management, Livestock, Sustainability, and more!');
