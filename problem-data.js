// Rich Dataset for Problem Pages
export const PROBLEM_DETAILS = {
    "1": {
        id: "1",
        title: "How can students find jobs faster?",
        productName: "JobFlow",
        tagline: "Bypass the ATS black hole. Connect directly with hiring managers in real-time.",
        creator: "Shahith Kumar",
        year: "2026",
        link: "https://github.com/shahithkumar/job-flow",
        theme: "gold",
        themeColors: {
            primary: "var(--box-gold-fg)",
            bg: "var(--box-gold-bg)"
        },
        meme: {
            title: "The Application Vortex",
            leftLabel: "Traditional ATS Route",
            leftItems: [
                "Fill 45-page Workday form manually",
                "Re-enter name & address 60 times",
                "Write 'Custom' Cover Letter (ignored)",
                "Wait 6 weeks for automated rejection"
            ],
            rightLabel: "JobFlow Direct Match",
            rightItems: [
                "Connect GitHub & portfolio with 1 click",
                "Semantic scoring matches real skill fit",
                "Instant chat with active hiring manager",
                "First round interview booked in 15 minutes"
            ],
            caption: "When the ATS asks you to upload your resume, and then asks you to type it all out again anyway."
        },
        origin: {
            story: "During the 2026 college recruitment cycle, I watched my brilliant classmates spend 6 hours a day filling out identical application inputs across dozens of disjointed career portals, only to get 'ghosted' by automated filters. I realized that resumes are flat, applicant tracking systems (ATS) are broken, and recruiters actually want to talk to students who build things. I built JobFlow to tear down the wall and create direct pipelines.",
            relevanceTitle: "Why resumes don't work anymore",
            relevanceText: "Up to 75% of resumes are discarded by automated ATS software before a human ever sees them. Students who spend their time building real-world projects get filtered out because they don't have the specific resume keywords, while recruiters complain they can't find practical builders.",
            stats: [
                { label: "Applications Discarded by ATS", value: "75%", percentage: 75 },
                { label: "Hiring Acceleration", value: "4.2x Faster", percentage: 90 },
                { label: "Recruiter Reply Rate", value: "68%", percentage: 68 }
            ]
        },
        usage: {
            browserTitle: "jobflow.dev/dashboard",
            pages: [
                {
                    title: "Student Feed",
                    url: "jobflow.dev/matches",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-logo">⚡ JobFlow</span>
                            <span class="uf-badge">Active Matches: 5</span>
                        </div>
                        <div class="uf-content">
                            <h4 class="uf-sec-title">Your AI Recommendations</h4>
                            <div class="uf-card active">
                                <div class="uf-card-top">
                                    <div class="uf-avatar gold">S</div>
                                    <div>
                                        <h5>Stripe</h5>
                                        <p>Frontend Engineering Intern</p>
                                    </div>
                                    <span class="uf-match-score">96% Match</span>
                                </div>
                                <div class="uf-card-body">
                                    <p class="uf-desc">Required skills: React, TypeScript, API Design. Your project "Git-Explorer" matches perfectly.</p>
                                    <div class="uf-tags">
                                        <span>React</span><span>TypeScript</span><span>Tailwind</span>
                                    </div>
                                </div>
                            </div>
                            <div class="uf-card">
                                <div class="uf-card-top">
                                    <div class="uf-avatar gold">V</div>
                                    <div>
                                        <h5>Vercel</h5>
                                        <p>Developer Advocate Intern</p>
                                    </div>
                                    <span class="uf-match-score">91% Match</span>
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Recruiter Direct Chat",
                    url: "jobflow.dev/chat/stripe",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-chat-status">🟢 Chatting with Sarah (Stripe Recruiting)</span>
                        </div>
                        <div class="uf-chat-box">
                            <div class="uf-msg recv">
                                <p>Hi Shahith! I loved your SVG System Design parser on GitHub. Are you free for a call this Thursday at 2 PM?</p>
                                <span class="uf-time">10:42 AM</span>
                            </div>
                            <div class="uf-msg sent">
                                <p>Hi Sarah! Thank you! Yes, Thursday at 2 PM works perfectly for me. Looking forward to it!</p>
                                <span class="uf-time">10:45 AM</span>
                            </div>
                            <div class="uf-msg recv">
                                <p>Awesome, sending a calendar invite now. Let's build something cool!</p>
                                <span class="uf-time">10:46 AM</span>
                            </div>
                        </div>
                    `
                }
            ]
        },
        video: {
            videoTitle: "JobFlow Walkthrough",
            videoDuration: "1:42",
            videoUrl: "real-2.mp4",
            explanationPoints: [
                { title: "One-Click Sync", text: "Directly import repositories, commits, and packages from GitHub to build a dynamic skill index." },
                { title: "AI-Powered Matching", text: "Matches students not on buzzwords, but on code patterns, complexity, and active developer habits." },
                { title: "Instant Messenger", text: "Integrated chat channels allow real-time conversation, interview scheduling, and document sharing." }
            ]
        },
        features: {
            mockupTitle: "Recruiter Dashboard View",
            mockupHtml: `
                <div class="feature-mockup-container">
                    <div class="mock-sidebar">
                        <div class="mock-nav-item active">Candidates</div>
                        <div class="mock-nav-item">Inbox</div>
                        <div class="mock-nav-item">Settings</div>
                    </div>
                    <div class="mock-main">
                        <div class="mock-header">
                            <h3>Hiring Pipeline: Frontend Interns</h3>
                        </div>
                        <div class="mock-candidate-profile">
                            <div class="mock-profile-header">
                                <img src="../assets/avatar.png" class="mock-avatar">
                                <div>
                                    <h4>Shahith Kumar</h4>
                                    <p>Active Builder • Chennai, India</p>
                                </div>
                            </div>
                            <div class="mock-skill-grid">
                                <div class="skill-meter" id="hotspot-score">
                                    <span class="skill-label">Semantic Match Rating</span>
                                    <div class="meter-bar"><div class="fill" style="width: 96%"></div></div>
                                </div>
                                <div class="skill-meter" id="hotspot-repos">
                                    <span class="skill-label">Top Repos Analyzed</span>
                                    <div class="repo-badges"><span>idea_generator</span><span>speakeasy-ai</span></div>
                                </div>
                            </div>
                            <button class="mock-btn-chat" id="hotspot-chat">Start Instant Chat</button>
                        </div>
                    </div>
                </div>
            `,
            hotspots: [
                { x: 70, y: 35, title: "Semantic Match Rating", desc: "Instantly checks candidate repository codebases against job spec descriptions using Vector Embedding similarity scores." },
                { x: 70, y: 58, title: "GitHub Analytics Index", desc: "Analyzes complexity of candidate code instead of static labels. Pulls active tech stack metrics and complexity indices." },
                { x: 70, y: 78, title: "Direct Chat Pipeline", desc: "Opens an encrypted WebSocket chat directly with the candidate, bypassing email threads and third-party platforms." }
            ]
        },
        systemDesign: {
            description: "A secure, low-latency, real-time message exchange and matchmaking architecture built with Next.js webhooks, vector search and pgvector clustering.",
            nodes: [
                { id: "client", label: "Developer Client (PWA)", type: "client", x: 50, y: 150, info: "PWA application built with Next.js offering responsive layouts, WebSocket client, and indexedDB storage." },
                { id: "gateway", label: "App Gateway (Nginx)", type: "gateway", x: 240, y: 150, info: "Reverse proxy route controller managing SSL termination, rate limiting, and caching headers." },
                { id: "ws_server", label: "WebSocket Broker (Socket.io)", type: "service", x: 430, y: 50, info: "Manages stateful real-time chat links between active recruiters and matching students." },
                { id: "api_server", label: "JobFlow Backend (Node.js)", type: "server", x: 430, y: 250, info: "Core REST engine processing auth, repository imports, and business rules." },
                { id: "vector_db", label: "Match Engine (pgvector)", type: "database", x: 620, y: 250, info: "PostgreSQL instance executing cosine-similarity matches against candidate code and job profiles." }
            ],
            edges: [
                { from: "client", to: "gateway", label: "HTTPS / WS Link", animated: true },
                { from: "gateway", to: "ws_server", label: "Route Socket Traffic", animated: true },
                { from: "gateway", to: "api_server", label: "Route HTTP API", animated: true },
                { from: "api_server", to: "vector_db", label: "Query Embeddings", animated: true },
                { from: "ws_server", to: "api_server", label: "Log Conversation", animated: false }
            ]
        }
    },
    "2": {
        id: "2",
        title: "How can travelers discover hidden places?",
        productName: "RoamAI",
        tagline: "Ditch the tourists. Discover authentic local secrets tailored to your mood.",
        creator: "Shahith Kumar",
        year: "2025",
        link: "https://github.com/shahithkumar/roam-ai",
        theme: "purple",
        themeColors: {
            primary: "var(--box-purple-fg)",
            bg: "var(--box-purple-bg)"
        },
        meme: {
            title: "The Tourist Trap Loop",
            leftLabel: "Typical Guidebook / Blog",
            leftItems: [
                "Visit crowded landmarks with selfie sticks",
                "Eat overpriced frozen pasta near Eiffel Tower",
                "Stand in a 3-hour queue for a photo",
                "Return home feeling exhausted and broke"
            ],
            rightLabel: "RoamAI Personalized Path",
            rightItems: [
                "Find quiet local cafe 3 blocks away",
                "Enjoy hand-baked bread with local residents",
                "Hike secret cliff overlook at sunset",
                "Connect with actual culture of the city"
            ],
            caption: "Standing in line for 2 hours to take the exact same picture that 10 million people already posted on Instagram."
        },
        origin: {
            story: "On a trip in 2025, I followed a top travel website's advice for dinner. I waited in a crowded queue, paid triple price, and got frozen food. Walking back, I passed a family-run trattoria two blocks away. It was empty of tourists, packed with locals, and smelled incredible. I spent that night coding the first prototype of RoamAI, an agent designed to help people escape the mass-tourism bubbles.",
            relevanceTitle: "Mass Tourism ruins the adventure",
            relevanceText: "Standard recommendation engines prioritize density and click volume, funneling millions of tourists into the same 1% of a city's area. This ruins the local neighborhood feel and leaves travelers with standardized, generic experiences.",
            stats: [
                { label: "Tourism Concentration In Cities", value: "85% on top 5 spots", percentage: 85 },
                { label: "Itinerary Satisfaction Increase", value: "2.5x Higher Rating", percentage: 95 },
                { label: "Local Businesses Supported", value: "64% Budget local", percentage: 64 }
            ]
        },
        usage: {
            browserTitle: "roamai.com/explore",
            pages: [
                {
                    title: "Mood Profiler Chat",
                    url: "roamai.com/chat",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-logo">🗺️ RoamAI</span>
                        </div>
                        <div class="uf-chat-box">
                            <div class="uf-msg recv">
                                <p>Hey! Tell me what kind of vibe you're looking for this afternoon. Quiet nature, local arts, or rustic food?</p>
                            </div>
                            <div class="uf-msg sent">
                                <p>I want to read a book in a quiet park in Tokyo, then eat some amazing handmade ramen that isn't touristy.</p>
                            </div>
                            <div class="uf-msg recv">
                                <p>Found: 🌲 Shinjuku Gyoen Greenhouse Garden (quiet glasshouse nook) & 🍜 Ramen Ganko (hidden basement shop, 4 stools, local favorite).</p>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Personalized Map Itinerary",
                    url: "roamai.com/map",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-logo">Your Custom Map</span>
                        </div>
                        <div class="uf-map-view">
                            <div class="uf-map-placeholder">
                                <div class="map-pin-custom" style="top: 30%; left: 45%;">📍 Read Spot</div>
                                <div class="map-pin-custom" style="top: 65%; left: 70%;">🍜 Ramen Spot</div>
                                <div class="map-route-line"></div>
                            </div>
                            <div class="uf-map-timeline">
                                <div class="timeline-step"><span>2:00 PM</span> Read at Greenhouse</div>
                                <div class="timeline-step"><span>5:30 PM</span> Hidden Ramen Bowl</div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        video: {
            videoTitle: "RoamAI Demo",
            videoDuration: "1:15",
            explanationPoints: [
                { title: "Psychological Mood Profiler", text: "Queries conversational preferences, noise tolerance, and energy levels instead of typing tags." },
                { title: "Off-Grid Indexing", text: "Filters out high-density tourist locations using TripAdvisor & Google Maps geolocation density metrics." },
                { title: "Dynamic Maps Routing", text: "Integrates Mapbox GL API to render custom paths and offline accessibility charts." }
            ]
        },
        features: {
            mockupTitle: "Interactive Route Builder",
            mockupHtml: `
                <div class="feature-mockup-container">
                    <div class="mock-main full-width">
                        <div class="mock-header flex-between">
                            <h3>Secret Itinerary: Paris Belleville Route</h3>
                            <span class="mock-badge">Customized for Shahith</span>
                        </div>
                        <div class="mock-split">
                            <div class="mock-map-frame" id="hotspot-map">
                                <div class="mock-inner-map">
                                    <div class="hotspot-map-pin" style="top: 30%; left: 25%">📍 Belleville Park</div>
                                    <div class="hotspot-map-pin" style="top: 55%; left: 60%">📍 Bakery Le Petit</div>
                                </div>
                            </div>
                            <div class="mock-itinerary-list">
                                <div class="itinerary-card" id="hotspot-item">
                                    <span class="step-num">1</span>
                                    <div>
                                        <h4>Belleville Lookout</h4>
                                        <p>Stunning skyline view, 90% fewer tourists than Sacre-Coeur.</p>
                                    </div>
                                </div>
                                <div class="itinerary-card" id="hotspot-route">
                                    <span class="step-num">2</span>
                                    <div>
                                        <h4>Le Petit Bakery</h4>
                                        <p>Famous local croissants, only accepts cash.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            hotspots: [
                { x: 30, y: 48, title: "Interactive Density Map", desc: "Mapbox visualizer showing crowd density overlay. Recommends places where traveler densities are low but review ratings are high." },
                { x: 65, y: 32, title: "Curated Spot Details", desc: "Displays useful practical context like cash-only warnings, language barriers, and best times to avoid queues." },
                { x: 65, y: 72, title: "Dynamic Time Scheduling", desc: "Automatically changes routes based on real-time transit schedules and solar angles for photography spots." }
            ]
        },
        systemDesign: {
            description: "Highly scalable geofiltering API parsing spatial coordinates, matching reviews via LLM evaluation and caching paths dynamically.",
            nodes: [
                { id: "client", label: "Client App (React)", type: "client", x: 50, y: 150, info: "Interactive client using Mapbox SDK and responsive custom panels." },
                { id: "gateway", label: "API Gateway (FastAPI)", type: "gateway", x: 240, y: 150, info: "Handles request parsing, session tokens, and route caching." },
                { id: "agent", label: "AI Routing Engine (LLM)", type: "service", x: 430, y: 50, info: "Structured OpenAI model parsing conversational user preferences and matches spots." },
                { id: "db_places", label: "Places DB (MongoDB)", type: "database", x: 620, y: 150, info: "Stores geo-tagged secret spots, user rating metadata, and local logs." },
                { id: "cache", label: "Cache Layer (Redis)", type: "cache", x: 430, y: 250, info: "Caches calculated coordinates and path routing grids to save API fees." }
            ],
            edges: [
                { from: "client", to: "gateway", label: "Fetch Itinerary", animated: true },
                { from: "gateway", to: "agent", label: "Evaluate Prefs", animated: true },
                { from: "gateway", to: "cache", label: "Lookup Route Cache", animated: true },
                { from: "agent", to: "db_places", label: "Query Spots", animated: true },
                { from: "gateway", to: "db_places", label: "Save Custom Trip", animated: false }
            ]
        }
    },
    "3": {
        id: "3",
        title: "How can local shops go online instantly?",
        productName: "SnapShop",
        tagline: "From photo to checkout link in under 60 seconds. Zero code, zero subscription fee.",
        creator: "Shahith Kumar",
        year: "2025",
        link: "https://github.com/shahithkumar/snap-shop",
        theme: "green",
        themeColors: {
            primary: "var(--box-green-fg)",
            bg: "var(--box-green-bg)"
        },
        meme: {
            title: "The E-Commerce Tax",
            leftLabel: "Shopify Setup",
            leftItems: [
                "Buy domain & configure DNS records",
                "Install theme, add CSS edits, upload logo",
                "Configure payment gateways and verification",
                "Pay $39/mo before selling a single item"
            ],
            rightLabel: "SnapShop",
            rightItems: [
                "Snap photo of product with phone camera",
                "Input price, description generated by AI",
                "Share instant link to WhatsApp Status",
                "Receive instant payouts via Stripe Link"
            ],
            caption: "Paying a monthly subscription fee for a web store when all you want to do is sell homemade cookies on WhatsApp."
        },
        origin: {
            story: "My local fruit vendor, Ramesh, wanted to sell seasonal mango boxes online. He signed up for Shopify, got confused by domain redirects, payment API credentials, and shipping profiles, and quit. I realized that micro-merchants don't need complex CMS platforms. They need a simple button that turns a smartphone photo into a checkout cart. I wrote SnapShop over a weekend to make selling as easy as messaging.",
            relevanceTitle: "Shopify is too complex for local stores",
            relevanceText: "Small shop owners don't have the desktop screens, technical skills, or cash flow to design online storefronts. They live on their phones and communicate via chat. Making their business digital should happen natively on mobile.",
            stats: [
                { label: "Setup Time Reduction", value: "60 seconds vs 3 days", percentage: 99 },
                { label: "Merchant Onboarding Cost", value: "$0 upfront", percentage: 100 },
                { label: "WhatsApp Conversions", value: "82% Click-to-Buy", percentage: 82 }
            ]
        },
        usage: {
            browserTitle: "snapshop.link/ramesh-fruits",
            pages: [
                {
                    title: "Merchant Camera App",
                    url: "snapshop.link/merchant/dashboard",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-logo">📸 SnapShop Seller</span>
                        </div>
                        <div class="uf-camera-preview">
                            <div class="uf-overlay-box">
                                <span class="uf-camera-status">Mango Box Detected</span>
                            </div>
                            <div class="uf-form-row">
                                <input type="text" class="uf-input" value="Alphonso Mango Box" placeholder="Product name">
                                <input type="text" class="uf-input" value="$12.00" placeholder="Price">
                            </div>
                            <button class="uf-btn green">Generate WhatsApp Link</button>
                        </div>
                    `
                },
                {
                    title: "Customer Checkout Page",
                    url: "snapshop.link/buy/ramesh-mangoes",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-logo">ramesh-fruits</span>
                        </div>
                        <div class="uf-product-buy">
                            <div class="uf-product-img-box">🥭</div>
                            <h3>Alphonso Mango Box</h3>
                            <p class="uf-price">$12.00</p>
                            <p class="uf-desc">Fresh sweet farm mangoes, delivered today.</p>
                            <button class="uf-btn-pay">💳 Pay with Apple Pay</button>
                            <button class="uf-btn-pay secondary">💬 Pay Cash on Delivery</button>
                        </div>
                    `
                }
            ]
        },
        video: {
            videoTitle: "SnapShop Demo Video",
            videoDuration: "0:58",
            explanationPoints: [
                { title: "Zero-Click Product Upload", text: "Uses mobile camera APIs and vision AI to auto-crop product frames and suggest titles." },
                { title: "One-Touch Stripe Payouts", text: "Integrates Stripe Connect to authorize instant payments direct to bank details." },
                { title: "WhatsApp Sync Channel", text: "Dispatches checkout notifications, receipts, and shipping details as WhatsApp text cards." }
            ]
        },
        features: {
            mockupTitle: "Mobile Customer Cart",
            mockupHtml: `
                <div class="feature-mockup-container mobile-style">
                    <div class="mobile-frame">
                        <div class="mobile-header">
                            <span>Shop Link</span>
                        </div>
                        <div class="mobile-body">
                            <div class="p-item" id="hotspot-img">
                                <span class="p-pic">🥭</span>
                                <div>
                                    <h5>Alphonso Mangoes</h5>
                                    <p>$12.00 per Box</p>
                                </div>
                            </div>
                            <div class="p-billing" id="hotspot-billing">
                                <div><span>Subtotal</span><span>$12.00</span></div>
                                <div><span>Delivery</span><span>Free</span></div>
                            </div>
                            <div class="p-checkout" id="hotspot-checkout">
                                <button class="btn-apple-pay">Pay with Apple Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            hotspots: [
                { x: 50, y: 25, title: "Vision-Cropped Assets", desc: "Image files are compressed and cropped locally in the browser, saving bandwidth for users on weak networks." },
                { x: 50, y: 55, title: "Pre-integrated Payment Gateways", desc: "No merchant bank configuration required. Stripe handles localized taxes and instant currency conversion." },
                { x: 50, y: 80, title: "1-Tap Checkout Link", desc: "Saves shipping address in browser memory. Checkout completes in one tap using Apple Pay, Google Pay, or card." }
            ]
        },
        systemDesign: {
            description: "Lightweight serverless commerce flow routing Stripe webhooks directly to WhatsApp API to alert shop owners of orders.",
            nodes: [
                { id: "client", label: "Customer Mobile PWA", type: "client", x: 50, y: 150, info: "Highly optimized checkout interface running on minimal devices." },
                { id: "gateway", label: "Serverless Endpoints (Firebase)", type: "gateway", x: 240, y: 150, info: "Handles database writes and routes Webhook alerts." },
                { id: "stripe", label: "Stripe Connect Engine", type: "service", x: 430, y: 50, info: "Processes checkouts and splits payouts to merchant Stripe accounts." },
                { id: "twilio", label: "Twilio WhatsApp Dispatcher", type: "service", x: 430, y: 250, info: "Formats message templates and pushes order details to merchant phones." },
                { id: "db_stores", label: "Store Logs (Firestore)", type: "database", x: 620, y: 150, info: "NoSQL DB storing store lists, product objects, and completed orders." }
            ],
            edges: [
                { from: "client", to: "gateway", label: "Submit Checkout", animated: true },
                { from: "gateway", to: "stripe", label: "Charge Request", animated: true },
                { from: "stripe", to: "gateway", label: "Webhook Confirm", animated: true },
                { from: "gateway", to: "twilio", label: "Dispatch Text Card", animated: true },
                { from: "gateway", to: "db_stores", label: "Write Transaction", animated: false }
            ]
        }
    },
    "4": {
        id: "4",
        title: "How can mental health support be accessible?",
        productName: "Haven",
        tagline: "An anonymous, encrypted, safe space to share and heal. Entirely free.",
        creator: "Shahith Kumar",
        year: "2024",
        link: "https://github.com/shahithkumar/haven-support",
        theme: "pink",
        themeColors: {
            primary: "var(--box-pink-fg)",
            bg: "var(--box-pink-bg)"
        },
        meme: {
            title: "The Support Stigma",
            leftLabel: "Traditional Channels",
            leftItems: [
                "Pay $150/hour to sit on therapist waitlist",
                "Mask feelings to avoid worrying your family",
                "Post on public social media (get trolled)",
                "Bottling up anxiety until burnout occurs"
            ],
            rightLabel: "Haven Safe Space",
            rightItems: [
                "Tap one button to enter secure room anonymously",
                "Match instantly with verified active listener",
                "100% encrypted chat deleted after close",
                "Express yourself fully, zero judgment"
            ],
            caption: "When you want to talk to someone about your stress, but the therapy waitlist is longer than your semester."
        },
        origin: {
            story: "During university exam period, I saw my friends crumbling under anxiety, sleep deprivation, and academic pressure. The campus counseling center had a 4-week waiting list, and therapy was financially impossible. I wanted to build a place where students could talk to peers safely, anonymously, and instantly without worry of stigma or cost. Haven was born to fill that gap.",
            relevanceTitle: "Mental healthcare is a financial luxury",
            relevanceText: "Over 50% of college students report feeling overwhelming anxiety, but the majority do not seek help. The barrier isn't just money; it's the stigma of sharing mental health concerns on paper or in public records.",
            stats: [
                { label: "Cost of Professional Session", value: "$120+/hour avg", percentage: 90 },
                { label: "Active Room Match Time", value: "45 seconds", percentage: 88 },
                { label: "Toxic Messages Intercepted", value: "99.8% safe", percentage: 99 }
            ]
        },
        usage: {
            browserTitle: "havenchat.org/secure",
            pages: [
                {
                    title: "Peer Match Queue",
                    url: "havenchat.org/queue",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-logo">🛡️ Haven Private</span>
                        </div>
                        <div class="uf-queue-room">
                            <div class="uf-queue-glow"></div>
                            <h4>Connecting you with a listener...</h4>
                            <p>All chats are completely anonymous and end-to-end encrypted.</p>
                            <div class="uf-safety-checklist">
                                <span>🔒 Encrypted</span>
                                <span>❌ No Logs Kept</span>
                                <span>❤️ Verified Listeners</span>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Anonymous Session",
                    url: "havenchat.org/room/9082",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-room-title">Guest Chat Session #9082</span>
                            <span class="uf-btn-leave">Exit & Wipe Room</span>
                        </div>
                        <div class="uf-chat-box">
                            <div class="uf-msg recv">
                                <p>Hi there. Please take your time and share whatever is on your mind. I am listening.</p>
                            </div>
                            <div class="uf-msg sent">
                                <p>I feel like I'm drowning in my assignments, and I can't sleep. I don't want to tell my parents because they expect so much.</p>
                            </div>
                            <div class="uf-msg recv">
                                <p>That sounds incredibly heavy. It is completely normal to feel overwhelmed when carrying that weight alone. You are not failing.</p>
                            </div>
                        </div>
                    `
                }
            ]
        },
        video: {
            videoTitle: "Haven Platform Walkthrough",
            videoDuration: "1:30",
            explanationPoints: [
                { title: "Encrypted Room Shuffling", text: "Matches users based on a dynamic queue without recording IP logs or account IDs." },
                { title: "AI Toxicity Shield", text: "Integrates local sentiment APIs to immediately flag and drop users sending abusive or malicious messages." },
                { title: "Crisis Autoredirect", text: "Detects key phrases of self-harm and instantly provides localized hotlines and clinical resources." }
            ]
        },
        features: {
            mockupTitle: "Haven Mobile Workspace",
            mockupHtml: `
                <div class="feature-mockup-container mobile-style">
                    <div class="mobile-frame">
                        <div class="mobile-header">
                            <span>Haven Private Room</span>
                        </div>
                        <div class="mobile-body">
                            <div class="haven-chat-container">
                                <div class="haven-bubble listener" id="hotspot-anon">
                                    <p>I hear you. It's okay to feel that way.</p>
                                </div>
                                <div class="haven-bubble user">
                                    <p>Thanks for listening.</p>
                                </div>
                                <div class="haven-input-area" id="hotspot-shield">
                                    <input type="text" class="haven-input" placeholder="Type a message...">
                                    <span class="shield-indicator">🛡️ Active</span>
                                </div>
                                <div class="haven-wipe" id="hotspot-wipe">
                                    <button class="btn-wipe">Wipe Chat & Exit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            hotspots: [
                { x: 50, y: 30, title: "100% Anonymized Identity", desc: "No usernames, profiles, or tracking tokens. Every user starts as a blank guest ID." },
                { x: 50, y: 65, title: "AI Input Filter", desc: "An on-device HuggingFace model analyzes typed strings before sending, blocking abusive phrases to protect listeners." },
                { x: 50, y: 88, title: "Instant Wipe Mechanism", desc: "Deletes room encryption keys from RAM immediately when clicked. Conversation is unrecoverable." }
            ]
        },
        systemDesign: {
            description: "Peer-to-peer WebRTC signaling server using disposable memory channels to prevent permanent storage of chat content.",
            nodes: [
                { id: "client_u", label: "User Client (Browser)", type: "client", x: 50, y: 50, info: "Guest client with browser crypto engines for WebRTC." },
                { id: "client_l", label: "Listener Client (Browser)", type: "client", x: 50, y: 250, info: "Vetted advisor console with WebRTC connections." },
                { id: "sig_server", label: "Signaling Hub (Express)", type: "gateway", x: 240, y: 150, info: "Socket manager facilitating handshake exchanges between peer clients." },
                { id: "tox_api", label: "Shield Model (HuggingFace)", type: "service", x: 430, y: 50, info: "Screening microservice analyzing text vectors in real-time." },
                { id: "redis_rooms", label: "Active Room Index (Redis)", type: "cache", x: 430, y: 250, info: "In-memory list of active signal links. Cleared instantly upon disconnection." }
            ],
            edges: [
                { from: "client_u", to: "sig_server", label: "Offer Signal", animated: true },
                { from: "client_l", to: "sig_server", label: "Answer Signal", animated: true },
                { from: "sig_server", to: "redis_rooms", label: "Fetch Queued Peer", animated: true },
                { from: "client_u", to: "tox_api", label: "Filter Text Payload", animated: true },
                { from: "client_u", to: "client_l", label: "WebRTC Encrypted Chat", animated: true }
            ]
        }
    },
    "5": {
        id: "5",
        title: "How can we practice speaking daily?",
        productName: "SpeakEasy",
        tagline: "Your AI language partner. Talk naturally, get real-time pronunciation tips.",
        creator: "Shahith Kumar",
        year: "2024",
        link: "https://github.com/shahithkumar/speakeasy-ai",
        theme: "blue",
        themeColors: {
            primary: "var(--box-blue-fg)",
            bg: "var(--box-blue-bg)"
        },
        meme: {
            title: "Flashcard Illusion",
            leftLabel: "Typical Language App",
            leftItems: [
                "Translate 'The apple is red' 80 times",
                "Match flashcard vocabulary words",
                "Maintain 'Streak' but never say a sentence",
                "Freeze when a native speaker asks a question"
            ],
            rightLabel: "SpeakEasy AI Companion",
            rightItems: [
                "Talk to AI Barista, Taxi Driver, or Recruiter",
                "Speak natural sentences into your microphone",
                "Get suggestions on syntax and accent",
                "Build confidence for real-world interactions"
            ],
            caption: "Using language apps for 500 days but still needing to point and nod when ordering a glass of water."
        },
        origin: {
            story: "I spent a year learning Spanish on language apps, getting perfect scores. But when I tried to order food at a local cafe, my mind went blank and I couldn't formulate a single sentence. I realized that vocabulary flashcards don't build confidence—only speaking does. I built SpeakEasy to give language learners a safe, judgment-free AI partner that talks back in real-time.",
            relevanceTitle: "Active recall vs Passive recognition",
            relevanceText: "Most language apps train passive recognition: matching text on screens. Speaking requires active generation of sentences, grammar layouts, and accent control under pressure. Real confidence requires simulated verbal training.",
            stats: [
                { label: "Vocabulary retention", value: "3.5x Faster", percentage: 92 },
                { label: "Speaking Confidence", value: "85% Feel bolder", percentage: 85 },
                { label: "Voice API Latency", value: "420ms Low Lag", percentage: 94 }
            ]
        },
        usage: {
            browserTitle: "speakeasyai.net/cafe",
            pages: [
                {
                    title: "AI Scenario Selector",
                    url: "speakeasyai.net/scenarios",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-logo">🎙️ SpeakEasy AI</span>
                        </div>
                        <div class="uf-scenarios-grid">
                            <div class="scenario-card active">
                                <div class="sc-emoji">☕</div>
                                <h5>Ordering Coffee (Spanish)</h5>
                                <p>Practice talking with Barista Sofia in Madrid.</p>
                                <span class="sc-level">Beginner</span>
                            </div>
                            <div class="scenario-card">
                                <div class="sc-emoji">🚕</div>
                                <h5>Taking a Taxi (German)</h5>
                                <p>Direct driver Johan through Berlin traffic.</p>
                                <span class="sc-level">Intermediate</span>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Speaking Interface",
                    url: "speakeasyai.net/scenario/cafe",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-chat-status">🗣️ Scenario: Cafe • Barista Sofia</span>
                        </div>
                        <div class="uf-dialogue-screen">
                            <div class="dialogue-bubble ai">
                                <span class="speaker">Sofia:</span>
                                <p>¡Hola! Buenas tardes. ¿Qué te pongo hoy?</p>
                            </div>
                            <div class="dialogue-bubble user">
                                <span class="speaker">You (Audio):</span>
                                <p>"Quiero un café con leche, por favor."</p>
                            </div>
                            <div class="feedback-panel">
                                <p class="feedback-title font-green">✅ Excellent pronunciation!</p>
                                <p class="feedback-tip">Grammar tip: You can also say <i>"¿Me pones un café...?"</i> for a more natural local phrasing.</p>
                            </div>
                        </div>
                    `
                }
            ]
        },
        video: {
            videoTitle: "SpeakEasy AI Audio Demo",
            videoDuration: "1:10",
            explanationPoints: [
                { title: "Whisper Voice Capture", text: "Uses high-fidelity speech-to-text API to accurately log accents and grammatical structures." },
                { title: "LLM Context Simulator", text: "Engages user in character scenarios with realistic responses and contextual adjustments." },
                { title: "TTS Accented Voice Engine", text: "Outputs natural ElevenLabs vocal streams with local idioms, pauses, and speech patterns." }
            ]
        },
        features: {
            mockupTitle: "Interactive Waveform Editor",
            mockupHtml: `
                <div class="feature-mockup-container">
                    <div class="mock-main full-width">
                        <div class="mock-header flex-between">
                            <h3>Conversation Panel</h3>
                            <button class="mock-btn-status">Active Mic</button>
                        </div>
                        <div class="voice-workspace">
                            <div class="waveform-box" id="hotspot-wave">
                                <div class="wave-bar" style="height: 20px"></div>
                                <div class="wave-bar" style="height: 40px"></div>
                                <div class="wave-bar" style="height: 60px"></div>
                                <div class="wave-bar" style="height: 30px"></div>
                                <div class="wave-bar" style="height: 70px"></div>
                            </div>
                            <div class="correction-card" id="hotspot-correct">
                                <h4>Grammar & Tone Corrections</h4>
                                <p class="bad-text">❌ "Quiero café" (Too demanding)</p>
                                <p class="good-text">✅ "¿Me pones un café...?" (Polite, local style)</p>
                            </div>
                            <div class="translation-toggle" id="hotspot-translate">
                                <button class="btn-toggle">Show English translation</button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            hotspots: [
                { x: 25, y: 45, title: "Real-time Waveform Analyzer", desc: "Monitors phonemes and pitch, identifying precise syllables where accent varies from native pronunciations." },
                { x: 70, y: 45, title: "Local Idiomatic Corrections", desc: "Suggests colloquial sentences used by actual residents instead of textbook grammar." },
                { x: 50, y: 78, title: "Contextual Translation Toggle", desc: "Provides on-demand translations to help users understand complex conjugations without leaving the scenario flow." }
            ]
        },
        systemDesign: {
            description: "Ultra-low-latency pipeline combining WebSocket streaming, audio chunk buffering, and AI API execution.",
            nodes: [
                { id: "client", label: "Browser Client (Svelte)", type: "client", x: 50, y: 150, info: "Captures microphone input and plays back audio buffers." },
                { id: "gateway", label: "FastAPI Gateway", type: "gateway", x: 240, y: 150, info: "Routes raw binary audio chunks and maintains user state." },
                { id: "stt", label: "Whisper STT Server", type: "service", x: 430, y: 50, info: "Converts incoming audio buffer streams to unicode text." },
                { id: "llm", label: "Scenario Agent (Llama-3)", type: "service", x: 620, y: 150, info: "Computes next conversation step and generates accent suggestions." },
                { id: "tts", label: "ElevenLabs TTS API", type: "service", x: 430, y: 250, info: "Generates natural speech files from AI text outputs." }
            ],
            edges: [
                { from: "client", to: "gateway", label: "Stream Binary Audio", animated: true },
                { from: "gateway", to: "stt", label: "Transcribe Buffer", animated: true },
                { from: "gateway", to: "llm", label: "Generate Reply", animated: true },
                { from: "gateway", to: "tts", label: "Synthesize Audio", animated: true },
                { from: "gateway", to: "client", label: "Push Audio Stream", animated: true }
            ]
        }
    },
    "6": {
        id: "6",
        title: "How can notes be smarter?",
        productName: "Kortex",
        tagline: "Your local second brain. Private semantic search over thousands of files.",
        creator: "Shahith Kumar",
        year: "2024",
        link: "https://github.com/shahithkumar/kortex-notes",
        theme: "orange",
        themeColors: {
            primary: "var(--box-orange-fg)",
            bg: "var(--box-orange-bg)"
        },
        meme: {
            title: "The Folder Search Maze",
            leftLabel: "Standard Search (Ctrl+F)",
            leftItems: [
                "Search 'marketing budget' (0 results)",
                "Realize you named it 'q3_finance_sync'",
                "Manually search through 50 markdown files",
                "Copy/paste paragraphs, rebuild context"
            ],
            rightLabel: "Kortex AI Vector Query",
            rightItems: [
                "Ask 'What did we decide about marketing?'",
                "Retrieves sentences matching the CONCEPT",
                "Synthesizes answers with file citations",
                "Everything runs offline, 100% private"
            ],
            caption: "Spending 20 minutes searching for a file because your past self decided to name it 'Untitled_Final_v2_edit.md'."
        },
        origin: {
            story: "I had over 2,000 notes in Markdown, bookmarks, and drafts spread across three different tools. Finding specific knowledge felt impossible unless I remembered the exact keyword I wrote. I wanted a tool that understood the context of my thoughts, allowing me to chat with my notes offline without uploading my private data. I built Kortex to be that local-first, semantic mind mapper.",
            relevanceTitle: "Text searching is outdated",
            relevanceText: "Standard folder indices look for exact character sequences, ignoring synonyms and concepts. Vector search indexes ideas, allowing users to query associations naturally just like the human brain links concepts together.",
            stats: [
                { label: "Search Retrieval Speed", value: "98% Faster", percentage: 98 },
                { label: "Local DB Size", value: "32MB (Very Light)", percentage: 80 },
                { label: "Offline privacy index", value: "100% On-device", percentage: 100 }
            ]
        },
        usage: {
            browserTitle: "kortex.local/workspace",
            pages: [
                {
                    title: "Semantic Mind Chat",
                    url: "kortex.local/search",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-logo">🧠 Kortex Search</span>
                        </div>
                        <div class="uf-chat-box">
                            <div class="uf-msg sent">
                                <p>Where did I write down the list of books recommended by my coworker in May?</p>
                            </div>
                            <div class="uf-msg recv">
                                <p>Found in 📁 <b>meeting_log_05_12.md</b>: "Alice recommended reading <i>Hooked</i> by Nir Eyal and <i>Zero to One</i> by Peter Thiel."</p>
                                <div class="uf-citation-card">
                                    <span>📁 meeting_log_05_12.md</span>
                                    <button class="uf-btn-view">Open Note</button>
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "Markdown Mind Editor",
                    url: "kortex.local/editor",
                    contentHtml: `
                        <div class="uf-header">
                            <span class="uf-logo">📁 meeting_log_05_12.md</span>
                        </div>
                        <div class="uf-editor-layout">
                            <div class="editor-side-meta">
                                <h5>Semantic Relations</h5>
                                <span class="sc-link">🔗 Hooked (Book)</span>
                                <span class="sc-link">🔗 Alice (Person)</span>
                            </div>
                            <div class="editor-body-markdown">
                                <p class="md-h1"># Meeting Log 05/12</p>
                                <p class="md-text">We discussed the Q3 product roadmap. Alice recommended reading <b>Hooked</b> by Nir Eyal to learn about habit-building loops.</p>
                            </div>
                        </div>
                    `
                }
            ]
        },
        video: {
            videoTitle: "Kortex Semantic Search Video",
            videoDuration: "1:24",
            explanationPoints: [
                { title: "Transformers.js Vector Index", text: "Computes 384-dimensional dense vectors inside the client thread, running entirely in browser memory." },
                { title: "SQLite Local Cache", text: "Indexes documents and token positions locally on disk for sub-millisecond retrieval speeds." },
                { title: "Context synthesis", text: "Assembles matching snippets and passes them to a local LLM (Ollama) to answer questions with citations." }
            ]
        },
        features: {
            mockupTitle: "Kortex Semantic Search Workspace",
            mockupHtml: `
                <div class="feature-mockup-container">
                    <div class="mock-sidebar">
                        <div class="mock-nav-item">Files</div>
                        <div class="mock-nav-item active">Search</div>
                        <div class="mock-nav-item">Graph</div>
                    </div>
                    <div class="mock-main">
                        <div class="mock-search-bar" id="hotspot-query">
                            <input type="text" class="search-input" value="books about habit loops" disabled>
                        </div>
                        <div class="search-results-list">
                            <div class="res-card" id="hotspot-results">
                                <span class="res-meta">meeting_log_05_12.md • Score: 0.88</span>
                                <p>"...Alice recommended reading Hooked by Nir Eyal to learn about habit-building..."</p>
                            </div>
                            <div class="res-card" id="hotspot-graph">
                                <span class="res-meta">book_notes.md • Score: 0.74</span>
                                <p>"...Habit formation occurs in four steps: cue, craving, response..."</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            hotspots: [
                { x: 50, y: 22, title: "Natural Language Query", desc: "Type normal sentences describing what you are looking for. No keywords, operators, or tags required." },
                { x: 70, y: 48, title: "Ranked Semantic Results", desc: "Calculates similarity scores between question embeddings and note sentence embeddings. Sorts matches by semantic distance." },
                { x: 70, y: 78, title: "Graph Association Links", desc: "Identifies related files that discuss the same concepts, showing links even if they share zero identical words." }
            ]
        },
        systemDesign: {
            description: "Desktop application pipeline storing and indexing notes locally on user machine to guarantee absolute privacy.",
            nodes: [
                { id: "client", label: "Electron UI (React)", type: "client", x: 50, y: 150, info: "User desktop interface displaying editor canvas and search prompts." },
                { id: "local_app", label: "Local Core (Node.js)", type: "gateway", x: 240, y: 150, info: "Manages local file reads/writes and controls background workers." },
                { id: "transformers", label: "Transformers.js Engine", type: "service", x: 430, y: 50, info: "Runs local ONNX models to extract vector embeddings from note text blocks." },
                { id: "sqlite", label: "Local SQLite Database", type: "database", x: 620, y: 150, info: "Indexes files, tags, meta keys, and full text vectors." },
                { id: "ollama", label: "Ollama LLM (Llama-3)", type: "service", x: 430, y: 250, info: "Runs offline chat completion model on-device to synthesize query answers." }
            ],
            edges: [
                { from: "client", to: "local_app", label: "Save Note / Search", animated: true },
                { from: "local_app", to: "transformers", label: "Embed Text Segment", animated: true },
                { from: "local_app", to: "sqlite", label: "Query / Write index", animated: true },
                { from: "local_app", to: "ollama", label: "Synthesize Answer", animated: true }
            ]
        }
    },
    "7": {
        id: "7",
        title: "How do I stop wasting time on YouTube?",
        productName: "Intent Tube",
        tagline: "Stop mindless YouTube scrolling. Set a goal, focus your search, and get back to work.",
        creator: "Shahith Kumar",
        year: "2026",
        link: "https://github.com/shahithkumar/Intent_Tube",
        ctaText: "Get GitHub Link",
        theme: "red",
        themeColors: {
            primary: "var(--box-red-fg)",
            bg: "var(--box-red-bg)"
        },
        meme: {
            title: "The Binge Trap",
            leftLabel: "Default YouTube Feed",
            leftItems: [
                "Infinite scroll of catchy thumbnails",
                "Autoplaying Shorts",
                "Clickbait videos designed to distract",
                "2 hours wasted watching random facts"
            ],
            rightLabel: "Intent Tube Extension",
            rightItems: [
                "Clean, empty search page by default",
                "Prompt forces you to type your viewing goal",
                "Hides sidebar recommendations & related clips",
                "Watch what you came for, then exit"
            ],
            caption: "Me: Opens YouTube to watch one tutorial.\nAlso me 3 hours later: \"The mating habits of penguins are actually fascinating.\" 🐧",
            gif: "assets/youtube-focus-meme.gif"
        },
        origin: {
            story: `I wanted to spend 15 minutes watching a coding tutorial on WebSockets, but got sucked into an autoplaying video about coffee roasting. Three hours later, I hadn't written a single line of code. I realized that willpower is no match for a multi-billion dollar algorithm engineered to hold your attention. I built Intent Tube to reclaim my attention span.

When I started researching this problem, I noticed something interesting. People weren't looking for another productivity app; they already had plenty of those. The real problem happened inside the browser—the exact moment they opened YouTube with a purpose and got pulled into endless recommendations.

That's why I chose a Chrome extension. Instead of asking people to download another app, create another habit, or remember another routine, the solution appears exactly where the problem begins. No extra steps. No friction. Just a small interruption at the moment it matters most.`,
            relevanceTitle: "Algorithms are designed to addict",
            relevanceText: `Recommendation engines maximize watch time and clicks. They funnel you into content loops that exploit your psychology, making it incredibly easy to consume mindlessly while delaying actual work.

We're living in an attention economy. The biggest companies in the world compete for one thing: your time. Every notification, recommendation, autoplay video, and infinite feed is engineered to keep you engaged a little longer.

Most productivity tools fight this by locking you out. But people don't want to stop using YouTube; they want to stop losing control while using it. The market doesn't need another blocker. It needs tools that help people stay intentional without getting in their way. That's the opportunity this product is built around.`,
            milestones: [
                {
                    title: "The Binge",
                    text: "I set out to watch a 15-minute coding tutorial on WebSockets, but fell into a 3-hour autoplay loop about coffee roasting. I realized willpower alone is useless against systems engineered to grab and hold human attention."
                },
                {
                    title: "The Friction",
                    text: "Researching the issue, I saw that generic blockers fail. The distraction happens inside the browser, in the exact second a user loads YouTube. The solution had to intercept their focus directly at the entry point."
                },
                {
                    title: "The Shield",
                    text: "I built Intent Tube as a lightweight Chrome extension. Instead of forcing new habits, it blocks recommendation feeds at the source, prompting users to state their goal, keeping them mindful and on track."
                }
            ],
            stats: []
        },
        usage: {
            browserTitle: "youtube.com - IntentTube Shield Active",
            pages: [
                {
                    title: "1. Declare Focus Intent",
                    url: "youtube.com (IntentTube Overlay)",
                    description: "Declare your viewing goal before entering YouTube. Select your session duration and launch the conscious session.",
                    contentHtml: `
                        <div class="it-yt-bg-blur">
                            <div class="it-yt-header">
                                <span class="it-yt-logo">▶ YouTube</span>
                                <div class="it-yt-search">Search</div>
                                <div class="it-yt-avatar"></div>
                            </div>
                            <div class="it-yt-grid">
                                <div class="it-yt-video-card"></div>
                                <div class="it-yt-video-card"></div>
                                <div class="it-yt-video-card"></div>
                                <div class="it-yt-video-card"></div>
                            </div>
                        </div>
                        <div class="it-popup-overlay">
                            <div class="it-popup-card">
                                <div class="it-popup-header">
                                    <span class="it-popup-title"><span class="it-logo-dot"></span> IntentTube</span>
                                    <span class="it-popup-ver">v3.0</span>
                                </div>
                                <div class="it-popup-body">
                                    <div class="it-field-group">
                                        <label class="it-label">WHAT IS YOUR INTENT?</label>
                                        <div class="it-input-wrapper">
                                            <input type="text" class="it-input" value="react" readonly>
                                            <span class="it-cursor-beam">|</span>
                                        </div>
                                        <div class="it-chips-row">
                                            <span class="it-chip active">react</span>
                                            <span class="it-chip">racetrack</span>
                                        </div>
                                    </div>
                                    <div class="it-field-group">
                                        <label class="it-label">SESSION DURATION</label>
                                        <div class="it-duration-row">
                                            <span class="it-dur-btn active">15m</span>
                                            <span class="it-dur-btn">30m</span>
                                            <span class="it-dur-btn">60m</span>
                                        </div>
                                    </div>
                                    <div class="it-checkbox-row">
                                        <input type="checkbox" id="block-others" checked disabled>
                                        <label for="block-others">BLOCK OTHER WEBSITES</label>
                                    </div>
                                    <button class="it-btn-start">
                                        Start Conscious Session
                                        <div class="it-click-cursor"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "2. Focused YouTube Feed",
                    url: "youtube.com/results?search_query=react",
                    description: "IntentTube hides YouTube recommendations and distracting sidebars. You only see search results matching your stated goal.",
                    contentHtml: `
                        <div class="it-yt-focused-view">
                            <div class="it-yt-header">
                                <span class="it-yt-logo">▶ YouTube</span>
                                <div class="it-yt-search-filled">react</div>
                                <div class="it-yt-avatar"></div>
                            </div>
                            <div class="it-yt-focused-body">
                                <div class="it-yt-sidebar">
                                    <div class="it-yt-side-item active">🏠 Home</div>
                                    <div class="it-yt-side-item">🔥 Shorts</div>
                                    <div class="it-yt-side-item">📂 Subscriptions</div>
                                    <div class="it-yt-divider"></div>
                                    <div class="it-yt-side-item">📚 Library</div>
                                </div>
                                <div class="it-yt-results">
                                    <div class="it-shield-banner">
                                        <span class="it-pulse-green"></span>
                                        <span>Focus Shield Active: Hiding recommendations & related distracting clips</span>
                                    </div>
                                    <div class="it-result-card">
                                        <div class="it-thumb neon-react">
                                            <span class="it-play-icon">▶</span>
                                            <span class="it-time-tag">10:00</span>
                                        </div>
                                        <div class="it-card-info">
                                            <h4 class="it-card-title">React JS Explained In 10 Minutes</h4>
                                            <p class="it-card-meta">Dennis Ivy • 809K views • 4 years ago</p>
                                            <p class="it-card-desc">A complete breakdown of the core concepts every React developer should have a solid grasp on...</p>
                                        </div>
                                    </div>
                                    <div class="it-result-card">
                                        <div class="it-thumb neon-react-19">
                                            <span class="it-play-icon">▶</span>
                                            <span class="it-time-tag">2:07:19</span>
                                        </div>
                                        <div class="it-card-info">
                                            <h4 class="it-card-title">React 19 Full Course 2025 | Build an App and Master React in 2 Hours</h4>
                                            <p class="it-card-meta">JavaScript Mastery • 2.2M views • 1 year ago</p>
                                            <p class="it-card-desc">Dive straight into React—from basic JSX to advanced hooks and build a real, modern web application.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    title: "3. Intercept & Block Screen",
                    url: "youtube.com (Distraction Blocked)",
                    description: "Focus Guard intercepts attempts to browse distracting or unrelated pages, keeping you focused on your target.",
                    contentHtml: `
                        <div class="it-block-screen">
                            <div class="it-block-card">
                                <svg class="it-block-lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                <h3 class="it-block-title">Session Intercepted!</h3>
                                <div class="it-intent-badge">
                                    <span class="it-intent-label">CURRENT INTENT</span>
                                    <span class="it-intent-value">react</span>
                                </div>
                                <p class="it-block-desc">You are attempting to visit a distracting or unrelated page. Stay intentional and focus on your stated learning goal.</p>
                                <div class="it-block-search-box">
                                    <input type="text" class="it-block-input" placeholder="Search YouTube intentionally..." value="react">
                                    <button class="it-block-search-btn">Search</button>
                                </div>
                                <div class="it-block-footer">
                                    <a href="#" class="it-end-session-link">END SESSION</a>
                                </div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        video: {
            videoTitle: "Intent Tube Demo",
            videoDuration: "1:02",
            videoUrl: "real-2.mp4",
            explanationPoints: [
                { title: "Feed Blocking", text: "Uses Chrome's MutationObserver API to intercept and strip home feed recommendation elements before they can render." },
                { title: "Intent Memory", text: "Persists the user's intent locally inside Chrome Storage Sync. Only allows searches matching semantic goal scopes." },
                { title: "Clean View Mode", text: "Injects stylesheet rules dynamically into YouTube pages to completely mask recommendation columns and sidebar side-clips." }
            ]
        },
        features: {
            mockupTitle: "Intent Tube — Active Shield",
            mockupHtml: `
                <div class="it-features-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; padding:1.25rem; background:var(--bg-page); width:100%; box-sizing:border-box;">
                    <div class="it-feat-card" id="hotspot-tablock" style="background:var(--bg-card); border:1px solid var(--border-card); border-radius:16px; padding:1.1rem 1.1rem 1rem; display:flex; flex-direction:column; gap:0.6rem; position:relative; overflow:hidden;">
                        <div style="display:flex; align-items:center; gap:0.6rem;">
                            <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">🔒</div>
                            <div>
                                <div style="font-size:0.82rem;font-weight:800;color:var(--text-main);font-family:var(--font-heading);">Tab Lock</div>
                                <div style="font-size:0.68rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Focus Shield</div>
                            </div>
                        </div>
                        <p style="font-size:0.75rem;color:var(--text-muted);line-height:1.5;margin:0;">Prevents opening other tabs while a session is active. Every attempt to stray is blocked.</p>
                        <div style="display:flex;align-items:center;gap:0.35rem;margin-top:auto;">
                            <div style="width:8px;height:8px;border-radius:50%;background:#6366f1;animation:itPulse 2s ease-in-out infinite;"></div>
                            <span style="font-size:0.68rem;color:#6366f1;font-weight:700;">ACTIVE</span>
                        </div>
                    </div>

                    <div class="it-feat-card" id="hotspot-feedwipe" style="background:var(--bg-card); border:1px solid var(--border-card); border-radius:16px; padding:1.1rem 1.1rem 1rem; display:flex; flex-direction:column; gap:0.6rem; position:relative; overflow:hidden;">
                        <div style="display:flex; align-items:center; gap:0.6rem;">
                            <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#ef4444,#f97316);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">🧹</div>
                            <div>
                                <div style="font-size:0.82rem;font-weight:800;color:var(--text-main);font-family:var(--font-heading);">Feed Wipe</div>
                                <div style="font-size:0.68rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Zero Distractions</div>
                            </div>
                        </div>
                        <p style="font-size:0.75rem;color:var(--text-muted);line-height:1.5;margin:0;">Entire YouTube feed is wiped clean — no recommendations, no trending, no rabbit holes.</p>
                        <div style="height:4px;border-radius:99px;background:rgba(239,68,68,0.15);overflow:hidden;margin-top:auto;">
                            <div style="height:100%;width:100%;background:linear-gradient(90deg,#ef4444,#f97316);border-radius:99px;animation:itSweep 2.5s ease-in-out infinite;"></div>
                        </div>
                    </div>

                    <div class="it-feat-card" id="hotspot-goalguard" style="background:var(--bg-card); border:1px solid var(--border-card); border-radius:16px; padding:1.1rem 1.1rem 1rem; display:flex; flex-direction:column; gap:0.6rem; position:relative; overflow:hidden;">
                        <div style="display:flex; align-items:center; gap:0.6rem;">
                            <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#10b981,#06b6d4);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">🎯</div>
                            <div>
                                <div style="font-size:0.82rem;font-weight:800;color:var(--text-main);font-family:var(--font-heading);">Goal Guard</div>
                                <div style="font-size:0.68rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Intent Filter</div>
                            </div>
                        </div>
                        <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:8px;padding:0.4rem 0.6rem;display:flex;align-items:center;gap:0.4rem;">
                            <span style="font-size:0.65rem;color:var(--text-muted);font-weight:700;text-transform:uppercase;">Goal:</span>
                            <span style="font-size:0.75rem;font-weight:700;color:#10b981;">Learn React Hooks</span>
                        </div>
                        <p style="font-size:0.75rem;color:var(--text-muted);line-height:1.5;margin:0;">Blocks any video that doesn't match your declared session goal. Stay on target.</p>
                    </div>

                    <div class="it-feat-card" id="hotspot-timer" style="background:var(--bg-card); border:1px solid var(--border-card); border-radius:16px; padding:1.1rem 1.1rem 1rem; display:flex; flex-direction:column; gap:0.6rem; position:relative; overflow:hidden;">
                        <div style="display:flex; align-items:center; gap:0.6rem;">
                            <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#f59e0b,#fbbf24);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">⏱️</div>
                            <div>
                                <div style="font-size:0.82rem;font-weight:800;color:var(--text-main);font-family:var(--font-heading);">Session Timer</div>
                                <div style="font-size:0.68rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Auto-Ends</div>
                            </div>
                        </div>
                        <div style="display:flex;gap:0.4rem;">
                            <div style="flex:1;text-align:center;padding:0.3rem;border-radius:8px;background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.3);font-size:0.7rem;font-weight:700;color:#f59e0b;">15 min</div>
                            <div style="flex:1;text-align:center;padding:0.3rem;border-radius:8px;background:rgba(245,158,11,0.9);font-size:0.7rem;font-weight:700;color:#fff;">30 min ✓</div>
                            <div style="flex:1;text-align:center;padding:0.3rem;border-radius:8px;background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.3);font-size:0.7rem;font-weight:700;color:#f59e0b;">60 min</div>
                        </div>
                        <p style="font-size:0.75rem;color:var(--text-muted);line-height:1.5;margin:0;">Sessions auto-end and log your progress. Tracks hours saved from distraction.</p>
                    </div>
                </div>
                <style>
                @keyframes itPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
                @keyframes itSweep { 0%{transform:translateX(-100%)} 100%{transform:translateX(200%)} }
                .it-feat-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
                .it-feat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
                </style>
            `,
            hotspots: [
                { x: 25, y: 27, title: "Tab Lock", desc: "When a session starts, the extension monitors chrome.tabs API events. Any attempt to open or switch to a non-YouTube tab triggers an immediate block notification." },
                { x: 75, y: 27, title: "Home Feed Wipe", desc: "A MutationObserver content script fires on page load and surgically removes #contents, ytd-rich-grid-renderer, and sidebar recommendations before they render." },
                { x: 25, y: 73, title: "Goal Guard", desc: "Each video's title and description is semantically compared to the stored goal string using a lightweight embedding check. Mismatches are blocked with a redirect prompt." },
                { x: 75, y: 73, title: "Session Timer", desc: "Background Service Worker uses chrome.alarms API to fire at the chosen interval. On expiry, all IntentTube rules are disabled and a progress log entry is written to Chrome Storage." }
            ]
        },
        systemDesign: {
            description: "A secure Chrome extension lifecycle that injects content scripts, intercepts network searches, and queries local storage variables.",
            nodes: [
                { id: "youtube", label: "YouTube.com Page", type: "client", x: 50, y: 150, info: "The target website where content scripts are loaded dynamically." },
                { id: "content_script", label: "Focus Content Script", type: "gateway", x: 240, y: 150, info: "Runs in the page context. Observes DOM additions and injects CSS filters to hide elements." },
                { id: "bg_script", label: "Extension Background Service", type: "service", x: 430, y: 50, info: "Manages extension alarms, tabs navigation events, and processes search string matches." },
                { id: "chrome_storage", label: "Chrome Storage Sync", type: "database", x: 620, y: 150, info: "Persists the current goal text, timers, and whitelist domains offline." },
                { id: "popup_ui", label: "Popup Control Interface", type: "client", x: 430, y: 250, info: "Chrome toolbar popup menu for configuring goals and viewing saved hour counts." }
            ],
            edges: [
                { from: "youtube", to: "content_script", label: "Load Script", animated: true },
                { from: "content_script", to: "bg_script", label: "Query Goal State", animated: true },
                { from: "popup_ui", to: "chrome_storage", label: "Write Goal Value", animated: true },
                { from: "bg_script", to: "chrome_storage", label: "Read Goal Sync", animated: true },
                { from: "content_script", to: "youtube", label: "Inject CSS Filters", animated: false }
            ]
        }
    },
    "8": {
        id: "8",
        title: "How do you actually stop forgetting everything you just read?",
        productName: "RECALL",
        tagline: "AI-powered Memory Operating System. Turn knowledge into a living 3D universe with spaced repetition.",
        creator: "Shahith Kumar",
        year: "2026",
        link: "https://github.com/shahithkumar/Recall",
        ctaText: "Get GitHub Link",
        theme: "aurora",
        themeColors: {
            primary: "#00D9C4",
            secondary: "#00D9C4",
            bg: "#080B14"
        },
        meme: {
            title: "The Forgetting Curve Trap",
            leftLabel: "Linear Notes & PDF Bookmarks",
            leftItems: [
                "50% forgotten within 1 hour, 80% lost in 48 hours",
                "Passive highlighting creates false sense of knowledge",
                "Flat linear notes hide concept dependencies",
                "Dead bookmarks piling up in forgotten folders"
            ],
            rightLabel: "RECALL 3D Memory OS",
            rightItems: [
                "📄 Ingest PDFs, Web URLs & raw text notes into atomic concepts",
                "🧠 AI Concept Generator, Semantic Mapper & Auto Flashcards",
                "🌌 Interactive 3D Galaxy (R3F/Three.js): Star Size = Centrality, Brightness = Memory Score",
                "🟢 Aurora (≥70%), 🟠 Supernova (40–69%), 🔴 Nova (<40%), & Memory Pulse rings",
                "🔄 SM-2 / FSRS Spaced Repetition daily reviews (0-5 grade) + Light Crystallization burst",
                "📝 3-Day Topic Assessment Engine (recall, short answer, scenarios) tracking retention"
            ],
            caption: "Me after finishing a great book:\n\"This might be the best book I've ever read.\"\n\nMe a month later:\n\"I know it was amazing... I just don't remember why.\" 📚",
            gif: "assets/GIF_RECALL.gif"
        },
        origin: {
            story: `It all started with a simple Reddit question: "How do you actually stop forgetting everything you just read?" The more I read through the discussion, the more I realized I had the same problem. I was spending hours reading books, articles, and documentation, only to forget most of it weeks later. That made me ask a different question—not "How can I read more?" but "How can I remember more?" That question became the foundation of RECALL, a project built to help knowledge stay with you instead of slowly fading away.`,
            relevanceTitle: "Combating the Ebbinghaus Forgetting Curve with Spatial AI Cognition",
            relevanceText: `Hermann Ebbinghaus proved that human memory decays exponentially without active recall: over 50% of newly learned information is lost within 1 hour, and up to 80% vanishes within 48 hours.

Generic study tools fail because flashcards operate in isolation without showing how concepts build upon one another, while document readers offer zero retention tracking.

RECALL bridges this gap by combining 3D spatial visualization with modern Spaced Repetition (FSRS/SM-2) and vector embeddings (pgvector). Knowledge is transformed from dead text into an interconnected galaxy where concept centrality scales star size, memory health dictates brightness and color, review triggers a crystallization light burst effect, and comprehension is validated through deep multi-format testing.`,
            milestones: [],
            stats: []
        },
        usage: {
            browserTitle: "RECALL — 3D Memory Operating System",
            pages: [
                {
                    title: "📄 Document & Knowledge Ingestion",
                    url: "recall.app/dashboard/upload",
                    description: "Drag & drop PDFs, Web URLs, or raw text notes. AI background workers extract structured knowledge and atomize documents into interconnected concepts with semantic embeddings.",
                    preview: "assets/recall-upload.png",
                    contentHtml: `
                        <div class="rc-dashboard-wrapper" style="padding:0.75rem; min-height:340px; font-size:0.78rem;">
                          <!-- Topbar -->
                          <div class="rc-topbar" style="padding-bottom:0.6rem; margin-bottom:0.75rem;">
                            <div class="rc-topbar-left">
                              <div class="rc-brand-badge">★</div>
                              <div class="rc-brand-text"><span class="rc-b-title">RECALL</span><span class="rc-b-sub">MEMORY OS</span></div>
                            </div>
                            <div style="display:flex;align-items:center;gap:0.5rem;">
                              <span style="background:rgba(0,217,196,0.12);color:#00D9C4;border:1px solid rgba(0,217,196,0.3);padding:0.2rem 0.55rem;border-radius:10px;font-size:0.6rem;font-weight:700;">📄 Upload</span>
                              <div class="rc-user-pill" style="width:22px;height:22px;"><div class="rc-avatar-yellow" style="width:22px;height:22px;font-size:0.6rem;">S</div></div>
                            </div>
                          </div>

                          <!-- Upload Zone -->
                          <div id="rc-upload-zone" style="border:2px dashed rgba(0,217,196,0.35);border-radius:12px;padding:1.2rem 1rem;text-align:center;cursor:pointer;background:rgba(0,217,196,0.04);transition:all 0.3s ease;margin-bottom:0.75rem;" onclick="rcSimulateUpload(this)">
                            <div style="font-size:1.6rem;margin-bottom:0.4rem;">📁</div>
                            <div style="color:#E8F4FD;font-weight:700;font-size:0.82rem;margin-bottom:0.25rem;">Drop PDFs, URLs or Text Notes here</div>
                            <div style="color:#8BA3C7;font-size:0.65rem;">Click to simulate ingestion • Supports PDF, URL, .txt, .md</div>
                            <div style="display:flex;gap:0.4rem;justify-content:center;margin-top:0.6rem;flex-wrap:wrap;">
                              <span style="background:#0F1629;border:1px solid rgba(255,255,255,0.1);padding:0.15rem 0.5rem;border-radius:6px;font-size:0.58rem;color:#8BA3C7;">📄 PDF</span>
                              <span style="background:#0F1629;border:1px solid rgba(255,255,255,0.1);padding:0.15rem 0.5rem;border-radius:6px;font-size:0.58rem;color:#8BA3C7;">🌐 URL</span>
                              <span style="background:#0F1629;border:1px solid rgba(255,255,255,0.1);padding:0.15rem 0.5rem;border-radius:6px;font-size:0.58rem;color:#8BA3C7;">📝 Text</span>
                            </div>
                          </div>

                          <!-- AI Processing Pipeline (hidden initially) -->
                          <div id="rc-pipeline-steps" style="display:none;flex-direction:column;gap:0.45rem;margin-bottom:0.75rem;">
                            <div style="font-size:0.62rem;font-weight:800;letter-spacing:0.5px;color:#8BA3C7;margin-bottom:0.15rem;">AI INGESTION PIPELINE</div>
                            <div class="rc-pipe-step" id="rcp-1" style="display:flex;align-items:center;gap:0.5rem;background:#0F1629;border-radius:8px;padding:0.45rem 0.65rem;border:1px solid rgba(255,255,255,0.06);">
                              <div class="rc-pipe-dot" style="width:8px;height:8px;border-radius:50%;background:#F5A623;animation:rcPulse 1s infinite;"></div>
                              <span style="color:#E8F4FD;font-size:0.72rem;flex:1;">📖 Parsing document structure & extracting text...</span>
                              <span style="color:#F5A623;font-size:0.6rem;font-weight:700;">RUNNING</span>
                            </div>
                            <div class="rc-pipe-step" id="rcp-2" style="display:flex;align-items:center;gap:0.5rem;background:#0F1629;border-radius:8px;padding:0.45rem 0.65rem;border:1px solid rgba(255,255,255,0.06);opacity:0.4;">
                              <div style="width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.2);"></div>
                              <span style="color:#8BA3C7;font-size:0.72rem;flex:1;">🧠 AI Concept Extractor → Generating atomic concepts & definitions...</span>
                              <span style="color:#8BA3C7;font-size:0.6rem;font-weight:700;">QUEUED</span>
                            </div>
                            <div class="rc-pipe-step" id="rcp-3" style="display:flex;align-items:center;gap:0.5rem;background:#0F1629;border-radius:8px;padding:0.45rem 0.65rem;border:1px solid rgba(255,255,255,0.06);opacity:0.4;">
                              <div style="width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.2);"></div>
                              <span style="color:#8BA3C7;font-size:0.72rem;flex:1;">🔗 Relationship Mapper → Building semantic edges (prerequisite_of, analogous_to)...</span>
                              <span style="color:#8BA3C7;font-size:0.6rem;font-weight:700;">QUEUED</span>
                            </div>
                            <div class="rc-pipe-step" id="rcp-4" style="display:flex;align-items:center;gap:0.5rem;background:#0F1629;border-radius:8px;padding:0.45rem 0.65rem;border:1px solid rgba(255,255,255,0.06);opacity:0.4;">
                              <div style="width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.2);"></div>
                              <span style="color:#8BA3C7;font-size:0.72rem;flex:1;">⚡ Flashcard Engine → Auto-generating Q&A pairs for each concept...</span>
                              <span style="color:#8BA3C7;font-size:0.6rem;font-weight:700;">QUEUED</span>
                            </div>
                            <div class="rc-pipe-step" id="rcp-5" style="display:flex;align-items:center;gap:0.5rem;background:#0F1629;border-radius:8px;padding:0.45rem 0.65rem;border:1px solid rgba(255,255,255,0.06);opacity:0.4;">
                              <div style="width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.2);"></div>
                              <span style="color:#8BA3C7;font-size:0.72rem;flex:1;">📊 pgvector → Embedding 1536-dim vectors into knowledge universe...</span>
                              <span style="color:#8BA3C7;font-size:0.6rem;font-weight:700;">QUEUED</span>
                            </div>
                          </div>

                          <!-- Result Cards (hidden initially) -->
                          <div id="rc-ingestion-results" style="display:none;">
                            <div style="font-size:0.62rem;font-weight:800;letter-spacing:0.5px;color:#8BA3C7;margin-bottom:0.4rem;">✅ INGESTION COMPLETE — 3 CONCEPTS EXTRACTED</div>
                            <div style="display:flex;flex-direction:column;gap:0.35rem;">
                              <div style="background:rgba(0,217,196,0.06);border:1px solid rgba(0,217,196,0.25);border-radius:8px;padding:0.5rem 0.65rem;display:flex;align-items:center;justify-content:space-between;">
                                <div>
                                  <div style="color:#E8F4FD;font-weight:700;font-size:0.72rem;margin-bottom:0.1rem;">Ebbinghaus Forgetting Curve</div>
                                  <div style="color:#8BA3C7;font-size:0.6rem;">prerequisite_of → Spaced Repetition</div>
                                </div>
                                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.2rem;">
                                  <span style="background:rgba(0,217,196,0.15);color:#00D9C4;padding:0.1rem 0.35rem;border-radius:4px;font-size:0.55rem;font-weight:700;">🟢 Aurora</span>
                                  <span style="color:#8BA3C7;font-size:0.55rem;">⚡ 4 flashcards</span>
                                </div>
                              </div>
                              <div style="background:rgba(245,166,35,0.06);border:1px solid rgba(245,166,35,0.2);border-radius:8px;padding:0.5rem 0.65rem;display:flex;align-items:center;justify-content:space-between;">
                                <div>
                                  <div style="color:#E8F4FD;font-weight:700;font-size:0.72rem;margin-bottom:0.1rem;">Active Recall Mechanism</div>
                                  <div style="color:#8BA3C7;font-size:0.6rem;">extends → Interleaved Practice</div>
                                </div>
                                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.2rem;">
                                  <span style="background:rgba(245,166,35,0.15);color:#F5A623;padding:0.1rem 0.35rem;border-radius:4px;font-size:0.55rem;font-weight:700;">🟠 Supernova</span>
                                  <span style="color:#8BA3C7;font-size:0.55rem;">⚡ 3 flashcards</span>
                                </div>
                              </div>
                              <div style="background:rgba(255,107,157,0.06);border:1px solid rgba(255,107,157,0.2);border-radius:8px;padding:0.5rem 0.65rem;display:flex;align-items:center;justify-content:space-between;">
                                <div>
                                  <div style="color:#E8F4FD;font-weight:700;font-size:0.72rem;margin-bottom:0.1rem;">Memory Consolidation</div>
                                  <div style="color:#8BA3C7;font-size:0.6rem;">analogous_to → Sleep Replay</div>
                                </div>
                                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.2rem;">
                                  <span style="background:rgba(255,107,157,0.15);color:#FF6B9D;padding:0.1rem 0.35rem;border-radius:4px;font-size:0.55rem;font-weight:700;">🔴 Nova</span>
                                  <span style="color:#8BA3C7;font-size:0.55rem;">⚡ 5 flashcards</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <style>
                          @keyframes rcPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
                          #rc-upload-zone:hover { border-color:rgba(0,217,196,0.7); background:rgba(0,217,196,0.08); transform:scale(1.01); }
                          </style>
                          <script>
                          function rcSimulateUpload(zone) {
                            if(zone.dataset.done) return;
                            zone.dataset.done='1';
                            zone.innerHTML='<div style="font-size:1.6rem">⏳</div><div style="color:#F5A623;font-weight:700;font-size:0.82rem;margin-top:0.4rem;">Processing: "The_Science_of_Memory.pdf"...</div>';
                            zone.style.borderColor='rgba(245,166,35,0.6)';
                            document.getElementById('rc-pipeline-steps').style.display='flex';
                            const steps=['rcp-1','rcp-2','rcp-3','rcp-4','rcp-5'];
                            const labels=['RUNNING','RUNNING','RUNNING','RUNNING','DONE'];
                            const colors=['#F5A623','#F5A623','#F5A623','#F5A623','#00D9C4'];
                            steps.forEach((id,i)=>{
                              setTimeout(()=>{
                                const el=document.getElementById(id);
                                el.style.opacity='1';
                                el.querySelector('.rc-pipe-dot,div').style.background=colors[i];
                                el.querySelector('span:last-child').textContent=labels[i];
                                el.querySelector('span:last-child').style.color=colors[i];
                                if(i===steps.length-1){
                                  setTimeout(()=>{
                                    zone.innerHTML='<div style="font-size:1.6rem">✅</div><div style="color:#00D9C4;font-weight:700;margin-top:0.4rem;">Ingested! 3 concepts extracted.</div>';
                                    zone.style.borderColor='rgba(0,217,196,0.6)';
                                    zone.style.background='rgba(0,217,196,0.06)';
                                    document.getElementById('rc-pipeline-steps').style.display='none';
                                    document.getElementById('rc-ingestion-results').style.display='block';
                                  },600);
                                }
                              },i*800+200);
                            });
                          }
                          </script>
                        </div>
                    `
                },
                {
                    title: "🧠 AI Concept Extraction & Relationship Graph",
                    url: "recall.app/dashboard/concepts",
                    description: "AI automatically identifies key concepts, definitions, and summaries, then links them with semantic edges (prerequisite_of, analogous_to, extends, part_of) and generates Q&A flashcards for each concept.",
                    preview: "assets/recall-dashboard.png",
                    contentHtml: `
                        <div class="rc-dashboard-wrapper" style="padding:0.75rem;min-height:340px;font-size:0.78rem;">
                          <!-- Topbar -->
                          <div class="rc-topbar" style="padding-bottom:0.6rem;margin-bottom:0.75rem;">
                            <div class="rc-topbar-left">
                              <div class="rc-brand-badge">★</div>
                              <div class="rc-brand-text"><span class="rc-b-title">RECALL</span><span class="rc-b-sub">CONCEPTS</span></div>
                            </div>
                            <div style="display:flex;align-items:center;gap:0.4rem;">
                              <span style="background:rgba(0,217,196,0.12);color:#00D9C4;border:1px solid rgba(0,217,196,0.3);padding:0.2rem 0.55rem;border-radius:10px;font-size:0.6rem;font-weight:700;">142 concepts</span>
                            </div>
                          </div>

                          <!-- Concept Cards with Relationship Edges -->
                          <div style="display:flex;flex-direction:column;gap:0.5rem;">

                            <!-- Concept 1 (active/expanded) -->
                            <div id="rc-concept-1" style="background:#0F1629;border:1.5px solid rgba(0,217,196,0.4);border-radius:10px;padding:0.65rem 0.75rem;cursor:pointer;transition:all 0.25s ease;" onclick="rcToggleConcept('1')">
                              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;">
                                <div style="display:flex;align-items:center;gap:0.5rem;">
                                  <div style="width:8px;height:8px;border-radius:50%;background:#00D9C4;box-shadow:0 0 8px #00D9C4;"></div>
                                  <span style="color:#E8F4FD;font-weight:700;font-size:0.8rem;">Ebbinghaus Forgetting Curve</span>
                                </div>
                                <div style="display:flex;align-items:center;gap:0.4rem;">
                                  <span style="background:rgba(0,217,196,0.15);color:#00D9C4;padding:0.1rem 0.4rem;border-radius:4px;font-size:0.55rem;font-weight:800;">🟢 95%</span>
                                  <span id="rc-c1-arrow" style="color:#8BA3C7;font-size:0.65rem;transition:transform 0.2s;">▼</span>
                                </div>
                              </div>
                              <div id="rc-c1-body" style="overflow:hidden;transition:max-height 0.35s ease;max-height:200px;">
                                <div style="color:#8BA3C7;font-size:0.7rem;line-height:1.45;margin-bottom:0.5rem;">Hermann Ebbinghaus (1885): Memory retention decays exponentially over time. Without active recall, over 50% of new information is lost within 1 hour, and 80% within 48 hours.</div>
                                <!-- Relationship edges -->
                                <div style="display:flex;flex-direction:column;gap:0.25rem;margin-bottom:0.55rem;">
                                  <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.62rem;">
                                    <span style="color:#F5A623;font-weight:700;">prerequisite_of</span>
                                    <span style="color:#8BA3C7;">→</span>
                                    <span style="background:rgba(245,166,35,0.12);color:#F5A623;padding:0.08rem 0.35rem;border-radius:4px;border:1px solid rgba(245,166,35,0.25);">Spaced Repetition</span>
                                  </div>
                                  <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.62rem;">
                                    <span style="color:#00D9C4;font-weight:700;">analogous_to</span>
                                    <span style="color:#8BA3C7;">→</span>
                                    <span style="background:rgba(0,217,196,0.1);color:#00D9C4;padding:0.08rem 0.35rem;border-radius:4px;border:1px solid rgba(0,217,196,0.25);">Cache Eviction in Redis</span>
                                  </div>
                                </div>
                                <!-- Flashcard preview -->
                                <div style="background:#080B14;border:1px solid rgba(0,217,196,0.2);border-radius:7px;padding:0.45rem 0.6rem;">
                                  <div style="font-size:0.58rem;font-weight:800;letter-spacing:0.4px;color:#00D9C4;margin-bottom:0.25rem;">⚡ FLASHCARD #01</div>
                                  <div style="color:#E8F4FD;font-size:0.7rem;font-weight:600;margin-bottom:0.25rem;">Q: What % of information is lost within 48 hours without active recall?</div>
                                  <div style="color:#8BA3C7;font-size:0.65rem;">A: ~80% — as shown by Ebbinghaus (1885) exponential decay curve</div>
                                </div>
                              </div>
                            </div>

                            <!-- Concept 2 (collapsed) -->
                            <div id="rc-concept-2" style="background:#0F1629;border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:0.65rem 0.75rem;cursor:pointer;transition:all 0.25s ease;" onclick="rcToggleConcept('2')">
                              <div style="display:flex;align-items:center;justify-content:space-between;">
                                <div style="display:flex;align-items:center;gap:0.5rem;">
                                  <div style="width:8px;height:8px;border-radius:50%;background:#F5A623;box-shadow:0 0 6px #F5A623;"></div>
                                  <span style="color:#E8F4FD;font-weight:700;font-size:0.8rem;">Spaced Repetition (SM-2 / FSRS)</span>
                                </div>
                                <div style="display:flex;align-items:center;gap:0.4rem;">
                                  <span style="background:rgba(245,166,35,0.15);color:#F5A623;padding:0.1rem 0.4rem;border-radius:4px;font-size:0.55rem;font-weight:800;">🟠 62%</span>
                                  <span id="rc-c2-arrow" style="color:#8BA3C7;font-size:0.65rem;transition:transform 0.2s;">▶</span>
                                </div>
                              </div>
                              <div id="rc-c2-body" style="overflow:hidden;transition:max-height 0.35s ease;max-height:0px;">
                                <div style="margin-top:0.5rem;color:#8BA3C7;font-size:0.7rem;line-height:1.45;margin-bottom:0.5rem;">Cognitive scheduling algorithm that spaces review intervals based on memory strength. Each successful recall extends the next review interval exponentially (stability × retrievability).</div>
                                <div style="display:flex;flex-direction:column;gap:0.25rem;margin-bottom:0.5rem;">
                                  <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.62rem;">
                                    <span style="color:#A78BFA;font-weight:700;">extends</span>
                                    <span style="color:#8BA3C7;">→</span>
                                    <span style="background:rgba(167,139,250,0.12);color:#A78BFA;padding:0.08rem 0.35rem;border-radius:4px;border:1px solid rgba(167,139,250,0.25);">Active Recall</span>
                                  </div>
                                  <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.62rem;">
                                    <span style="color:#FF6B9D;font-weight:700;">part_of</span>
                                    <span style="color:#8BA3C7;">→</span>
                                    <span style="background:rgba(255,107,157,0.12);color:#FF6B9D;padding:0.08rem 0.35rem;border-radius:4px;border:1px solid rgba(255,107,157,0.25);">RECALL Review Engine</span>
                                  </div>
                                </div>
                                <div style="background:#080B14;border:1px solid rgba(245,166,35,0.2);border-radius:7px;padding:0.45rem 0.6rem;">
                                  <div style="font-size:0.58rem;font-weight:800;letter-spacing:0.4px;color:#F5A623;margin-bottom:0.25rem;">⚡ FLASHCARD #02</div>
                                  <div style="color:#E8F4FD;font-size:0.7rem;font-weight:600;margin-bottom:0.25rem;">Q: How does SM-2 determine the next review interval?</div>
                                  <div style="color:#8BA3C7;font-size:0.65rem;">A: New interval = previous interval × ease factor (default 2.5), adjusted by recall quality (0-5)</div>
                                </div>
                              </div>
                            </div>

                            <!-- Concept 3 (collapsed) -->
                            <div id="rc-concept-3" style="background:#0F1629;border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:0.65rem 0.75rem;cursor:pointer;transition:all 0.25s ease;" onclick="rcToggleConcept('3')">
                              <div style="display:flex;align-items:center;justify-content:space-between;">
                                <div style="display:flex;align-items:center;gap:0.5rem;">
                                  <div style="width:8px;height:8px;border-radius:50%;background:#FF6B9D;box-shadow:0 0 6px #FF6B9D;"></div>
                                  <span style="color:#E8F4FD;font-weight:700;font-size:0.8rem;">Memory Consolidation</span>
                                </div>
                                <div style="display:flex;align-items:center;gap:0.4rem;">
                                  <span style="background:rgba(255,107,157,0.15);color:#FF6B9D;padding:0.1rem 0.4rem;border-radius:4px;font-size:0.55rem;font-weight:800;">🔴 28%</span>
                                  <span id="rc-c3-arrow" style="color:#8BA3C7;font-size:0.65rem;transition:transform 0.2s;">▶</span>
                                </div>
                              </div>
                              <div id="rc-c3-body" style="overflow:hidden;transition:max-height 0.35s ease;max-height:0px;">
                                <div style="margin-top:0.5rem;color:#8BA3C7;font-size:0.7rem;line-height:1.45;margin-bottom:0.5rem;">The neural process by which newly acquired information is stabilized in long-term memory, primarily occurring during sleep through hippocampal replay and synaptic consolidation.</div>
                                <div style="display:flex;flex-direction:column;gap:0.25rem;margin-bottom:0.5rem;">
                                  <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.62rem;">
                                    <span style="color:#00D9C4;font-weight:700;">analogous_to</span>
                                    <span style="color:#8BA3C7;">→</span>
                                    <span style="background:rgba(0,217,196,0.1);color:#00D9C4;padding:0.08rem 0.35rem;border-radius:4px;border:1px solid rgba(0,217,196,0.25);">Write-behind Cache</span>
                                  </div>
                                </div>
                                <div style="background:#080B14;border:1px solid rgba(255,107,157,0.2);border-radius:7px;padding:0.45rem 0.6rem;">
                                  <div style="font-size:0.58rem;font-weight:800;letter-spacing:0.4px;color:#FF6B9D;margin-bottom:0.25rem;">⚡ FLASHCARD #03 — DUE TODAY</div>
                                  <div style="color:#E8F4FD;font-size:0.7rem;font-weight:600;margin-bottom:0.25rem;">Q: What brain region drives memory consolidation during sleep?</div>
                                  <div style="color:#8BA3C7;font-size:0.65rem;">A: The hippocampus — replays experiences during slow-wave sleep to transfer to neocortex</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <script>
                          function rcToggleConcept(id) {
                            const body = document.getElementById('rc-c'+id+'-body');
                            const arrow = document.getElementById('rc-c'+id+'-arrow');
                            const card = document.getElementById('rc-concept-'+id);
                            const isOpen = body.style.maxHeight !== '0px' && body.style.maxHeight !== '';
                            // Close all
                            ['1','2','3'].forEach(i => {
                              const b = document.getElementById('rc-c'+i+'-body');
                              const a = document.getElementById('rc-c'+i+'-arrow');
                              const c = document.getElementById('rc-concept-'+i);
                              b.style.maxHeight = '0px';
                              a.textContent = '▶';
                              c.style.borderColor = 'rgba(255,255,255,0.08)';
                            });
                            if (!isOpen) {
                              body.style.maxHeight = '300px';
                              arrow.textContent = '▼';
                              card.style.borderColor = id==='1'?'rgba(0,217,196,0.4)':id==='2'?'rgba(245,166,35,0.4)':'rgba(255,107,157,0.4)';
                            }
                          }
                          </script>
                        </div>
                    `
                },
                {
                    title: "🌌 Interactive 3D Knowledge Universe",
                    url: "recall.app/dashboard/universe",
                    description: "Visualizes your knowledge as a living galaxy. Star Size = concept centrality. Star Brightness = memory score. 🟢 Aurora (≥70%), 🟠 Supernova (40–69%), 🔴 Nova (<40%). Pulsing rings = due for review today.",
                    preview: "assets/recall-universe.png",
                    contentHtml: `
                        <div style="background:#04060C;border-radius:12px;min-height:340px;position:relative;overflow:hidden;font-family:'Inter',sans-serif;font-size:0.78rem;">
                          <!-- Topbar -->
                          <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem 1rem;border-bottom:1px solid rgba(255,255,255,0.06);position:relative;z-index:10;">
                            <div style="display:flex;align-items:center;gap:0.5rem;">
                              <div style="width:8px;height:8px;border-radius:50%;background:#00D9C4;box-shadow:0 0 8px #00D9C4;animation:rcPulse 2s infinite;"></div>
                              <span style="color:#E8F4FD;font-weight:800;font-size:0.78rem;letter-spacing:0.5px;">KNOWLEDGE UNIVERSE</span>
                            </div>
                            <div style="display:flex;gap:0.4rem;">
                              <span style="background:rgba(0,217,196,0.1);color:#00D9C4;border:1px solid rgba(0,217,196,0.25);padding:0.15rem 0.5rem;border-radius:6px;font-size:0.58rem;font-weight:700;">142 Stars</span>
                              <span style="background:rgba(255,255,255,0.06);color:#8BA3C7;border:1px solid rgba(255,255,255,0.1);padding:0.15rem 0.5rem;border-radius:6px;font-size:0.58rem;">3D Mode</span>
                            </div>
                          </div>

                          <!-- Canvas -->
                          <canvas id="rc-universe-canvas" style="position:absolute;top:0;left:0;width:100%;height:100%;"></canvas>

                          <!-- Tooltip -->
                          <div id="rc-star-tooltip" style="display:none;position:absolute;background:rgba(8,11,20,0.95);border:1px solid rgba(0,217,196,0.35);border-radius:10px;padding:0.6rem 0.85rem;font-size:0.68rem;color:#E8F4FD;pointer-events:none;z-index:20;min-width:150px;max-width:200px;backdrop-filter:blur(8px);">
                            <div id="rc-tt-name" style="font-weight:800;margin-bottom:0.25rem;"></div>
                            <div id="rc-tt-score" style="margin-bottom:0.15rem;"></div>
                            <div id="rc-tt-edges" style="color:#8BA3C7;font-size:0.6rem;"></div>
                          </div>

                          <!-- Legend -->
                          <div style="position:absolute;bottom:0.75rem;left:0.85rem;background:rgba(8,11,20,0.9);border:1px solid rgba(0,217,196,0.2);border-radius:10px;padding:0.6rem 0.85rem;z-index:10;backdrop-filter:blur(8px);">
                            <div style="font-size:0.6rem;font-weight:800;letter-spacing:0.4px;color:#E8F4FD;margin-bottom:0.3rem;">MEMORY HEALTH</div>
                            <div style="display:flex;flex-direction:column;gap:0.2rem;">
                              <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.6rem;color:#8BA3C7;"><div style="width:8px;height:8px;border-radius:50%;background:#00D9C4;box-shadow:0 0 5px #00D9C4;"></div> 🟢 Aurora ≥70%</div>
                              <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.6rem;color:#8BA3C7;"><div style="width:8px;height:8px;border-radius:50%;background:#F5A623;box-shadow:0 0 5px #F5A623;"></div> 🟠 Supernova 40–69%</div>
                              <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.6rem;color:#8BA3C7;"><div style="width:8px;height:8px;border-radius:50%;background:#FF6B9D;box-shadow:0 0 5px #FF6B9D;"></div> 🔴 Nova &lt;40%</div>
                              <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.6rem;color:#8BA3C7;"><div style="width:10px;height:10px;border-radius:50%;border:1.5px solid #00D9C4;animation:pulseRing 2s infinite;"></div> Memory Pulse = Due today</div>
                            </div>
                          </div>

                          <!-- Info hint -->
                          <div style="position:absolute;bottom:0.75rem;right:0.85rem;color:#8BA3C7;font-size:0.58rem;background:rgba(8,11,20,0.85);padding:0.3rem 0.5rem;border-radius:6px;z-index:10;">Hover stars to inspect</div>

                          <script>
                          (function(){
                            const canvas = document.getElementById('rc-universe-canvas');
                            if(!canvas) return;
                            const ctx = canvas.getContext('2d');
                            const concepts = [
                              {name:'Ebbinghaus Curve',score:95,edges:4,x:0.35,y:0.42,color:'#00D9C4',pulse:false},
                              {name:'Spaced Repetition',score:62,edges:6,x:0.55,y:0.35,color:'#F5A623',pulse:true},
                              {name:'Memory Consolidation',score:28,edges:2,x:0.65,y:0.60,color:'#FF6B9D',pulse:true},
                              {name:'Active Recall',score:81,edges:5,x:0.28,y:0.62,color:'#00D9C4',pulse:false},
                              {name:'FSRS Algorithm',score:55,edges:3,x:0.72,y:0.42,color:'#F5A623',pulse:false},
                              {name:'Raft Consensus',score:89,edges:7,x:0.18,y:0.30,color:'#00D9C4',pulse:false},
                              {name:'React Server Comps',score:91,edges:4,x:0.82,y:0.28,color:'#00D9C4',pulse:false},
                              {name:'pgvector Embeddings',score:44,edges:3,x:0.50,y:0.70,color:'#F5A623',pulse:true},
                              {name:'Leader Election',score:78,edges:5,x:0.15,y:0.55,color:'#00D9C4',pulse:false},
                              {name:'Sleep Replay',score:35,edges:2,x:0.78,y:0.68,color:'#FF6B9D',pulse:true},
                              {name:'Cache Eviction',score:72,edges:3,x:0.42,y:0.22,color:'#00D9C4',pulse:false},
                              {name:'Interleaved Practice',score:48,edges:4,x:0.60,y:0.80,color:'#F5A623',pulse:false},
                              {name:'Next.js App Router',score:95,edges:6,x:0.88,y:0.48,color:'#00D9C4',pulse:false},
                              {name:'WebSocket Gateway',score:30,edges:2,x:0.25,y:0.78,color:'#FF6B9D',pulse:true},
                              {name:'BullMQ Queues',score:66,edges:3,x:0.12,y:0.42,color:'#F5A623',pulse:false},
                            ];
                            const edges = [
                              [0,1],[0,3],[1,4],[1,2],[2,9],[3,7],[4,5],[5,8],[6,12],[7,11],[8,14],[9,10],[10,0],[11,1],[12,6]
                            ];
                            let W,H,animFrame,pulseT=0,mouseX=-999,mouseY=-999,hoveredIdx=-1;
                            function resize(){
                              const rect=canvas.parentElement.getBoundingClientRect();
                              W=canvas.width=rect.width;
                              H=canvas.height=rect.height;
                            }
                            resize();
                            window.addEventListener('resize',resize);
                            canvas.addEventListener('mousemove',function(e){
                              const rect=canvas.getBoundingClientRect();
                              mouseX=e.clientX-rect.left;
                              mouseY=e.clientY-rect.top;
                            });
                            canvas.addEventListener('mouseleave',function(){
                              mouseX=-999;mouseY=-999;hoveredIdx=-1;
                              document.getElementById('rc-star-tooltip').style.display='none';
                            });
                            function getPos(c){return{x:c.x*W,y:c.y*H};}
                            function getRadius(c){return 4+c.edges*1.1;}
                            function draw(){
                              pulseT+=0.03;
                              ctx.clearRect(0,0,W,H);
                              // Draw background stars (tiny)
                              ctx.fillStyle='rgba(255,255,255,0.3)';
                              for(let i=0;i<60;i++){
                                const sx=((i*137+17)%100)/100*W;
                                const sy=((i*79+31)%100)/100*H;
                                ctx.beginPath();ctx.arc(sx,sy,0.6,0,Math.PI*2);ctx.fill();
                              }
                              // Draw edges
                              edges.forEach(([a,b])=>{
                                const pa=getPos(concepts[a]),pb=getPos(concepts[b]);
                                ctx.beginPath();ctx.moveTo(pa.x,pa.y);ctx.lineTo(pb.x,pb.y);
                                ctx.strokeStyle='rgba(0,217,196,0.12)';ctx.lineWidth=0.8;ctx.stroke();
                              });
                              // Find hovered
                              let newHovered=-1;
                              concepts.forEach((c,i)=>{
                                const p=getPos(c);const r=getRadius(c);
                                const dx=mouseX-p.x,dy=mouseY-p.y;
                                if(Math.sqrt(dx*dx+dy*dy)<r+6) newHovered=i;
                              });
                              if(newHovered!==hoveredIdx){
                                hoveredIdx=newHovered;
                                const tt=document.getElementById('rc-star-tooltip');
                                if(hoveredIdx>=0){
                                  const c=concepts[hoveredIdx];
                                  document.getElementById('rc-tt-name').textContent=c.name;
                                  const emoji=c.score>=70?'🟢':c.score>=40?'🟠':'🔴';
                                  const label=c.score>=70?'Aurora':c.score>=40?'Supernova':'Nova';
                                  document.getElementById('rc-tt-score').innerHTML=emoji+' '+label+' — <strong>'+c.score+'%</strong> memory';
                                  document.getElementById('rc-tt-edges').textContent=c.edges+' semantic edges'+(c.pulse?' · Due today':'');
                                  tt.style.display='block';
                                } else { tt.style.display='none'; }
                              }
                              if(hoveredIdx>=0){
                                const p=getPos(concepts[hoveredIdx]);
                                const tt=document.getElementById('rc-star-tooltip');
                                let tx=p.x+14,ty=p.y-30;
                                if(tx+200>W) tx=p.x-210;
                                if(ty<10) ty=p.y+14;
                                tt.style.left=tx+'px';tt.style.top=ty+'px';
                              }
                              // Draw stars
                              concepts.forEach((c,i)=>{
                                const p=getPos(c);const r=getRadius(c);
                                const opacity=0.4+c.score/100*0.6;
                                const isHov=i===hoveredIdx;
                                // Pulse ring
                                if(c.pulse){
                                  const pr=r+4+Math.sin(pulseT+i)*4;
                                  ctx.beginPath();ctx.arc(p.x,p.y,pr,0,Math.PI*2);
                                  ctx.strokeStyle='rgba(0,217,196,'+(0.2+Math.abs(Math.sin(pulseT+i))*0.4)+')';
                                  ctx.lineWidth=1.5;ctx.stroke();
                                }
                                // Glow
                                const grad=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,r*3);
                                grad.addColorStop(0,c.color+'88');
                                grad.addColorStop(1,'transparent');
                                ctx.beginPath();ctx.arc(p.x,p.y,r*3,0,Math.PI*2);
                                ctx.fillStyle=grad;ctx.fill();
                                // Core
                                ctx.beginPath();ctx.arc(p.x,p.y,isHov?r*1.35:r,0,Math.PI*2);
                                ctx.fillStyle=c.color;ctx.globalAlpha=opacity;ctx.fill();
                                ctx.globalAlpha=1;
                              });
                              animFrame=requestAnimationFrame(draw);
                            }
                            draw();
                          })();
                          </script>
                          <style>@keyframes rcPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(1.3)}}</style>
                        </div>
                    `
                },
                {
                    title: "🔄 Spaced Repetition & Daily Review",
                    url: "recall.app/dashboard/review",
                    description: "SM-2/FSRS algorithms drive daily interactive flashcard reviews. Grade recall quality 0–5 to schedule optimal intervals. Successful reviews trigger a visual crystallization light burst on the star.",
                    preview: "assets/recall-review.png",
                    contentHtml: `
                        <div class="rc-dashboard-wrapper" style="padding:0.75rem;min-height:340px;font-size:0.78rem;">
                          <!-- Topbar -->
                          <div class="rc-topbar" style="padding-bottom:0.6rem;margin-bottom:0.75rem;">
                            <div class="rc-topbar-left">
                              <div class="rc-brand-badge">★</div>
                              <div class="rc-brand-text"><span class="rc-b-title">RECALL</span><span class="rc-b-sub">DAILY REVIEW</span></div>
                            </div>
                            <span id="rc-rv-progress" style="background:rgba(0,217,196,0.12);color:#00D9C4;border:1px solid rgba(0,217,196,0.3);padding:0.2rem 0.55rem;border-radius:10px;font-size:0.62rem;font-weight:700;">Card 1 of 8</span>
                          </div>

                          <!-- Progress bar -->
                          <div style="background:#0F1629;border-radius:4px;height:4px;margin-bottom:0.85rem;overflow:hidden;">
                            <div id="rc-rv-bar" style="height:100%;width:12.5%;background:linear-gradient(90deg,#00D9C4,#F5A623);border-radius:4px;transition:width 0.4s ease;"></div>
                          </div>

                          <!-- Flashcard -->
                          <div id="rc-flashcard-scene" style="perspective:1000px;margin-bottom:0.85rem;">
                            <div id="rc-flashcard" style="position:relative;width:100%;height:160px;cursor:pointer;transform-style:preserve-3d;transition:transform 0.55s cubic-bezier(0.4,0,0.2,1);" onclick="rcFlipCard()">
                              <!-- Front -->
                              <div style="position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;background:linear-gradient(135deg,#0F1629,#141E38);border:1.5px solid rgba(0,217,196,0.35);border-radius:14px;padding:1.1rem 1.25rem;display:flex;flex-direction:column;justify-content:space-between;">
                                <div style="display:flex;justify-content:space-between;align-items:center;">
                                  <span style="font-size:0.6rem;font-weight:800;letter-spacing:0.5px;color:#00D9C4;">SPACED REPETITION · FSRS</span>
                                  <span style="font-size:0.6rem;color:#F5A623;font-weight:700;">🔄 Due Today</span>
                                </div>
                                <div>
                                  <div style="font-size:0.92rem;font-weight:700;color:#E8F4FD;line-height:1.4;margin-bottom:0.5rem;" id="rc-card-q">Q: What does the FSRS algorithm optimize for when scheduling a card review?</div>
                                  <div style="color:#8BA3C7;font-size:0.62rem;">Tap to reveal answer</div>
                                </div>
                                <div style="font-size:0.58rem;color:rgba(255,255,255,0.25);">Concept: SuperMemo-2 / FSRS · Memory Scheduling</div>
                              </div>
                              <!-- Back -->
                              <div id="rc-card-back" style="position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg);background:linear-gradient(135deg,#080B14,#0D1525);border:1.5px solid rgba(0,217,196,0.5);border-radius:14px;padding:1.1rem 1.25rem;display:flex;flex-direction:column;justify-content:space-between;">
                                <div style="font-size:0.6rem;font-weight:800;letter-spacing:0.5px;color:#00D9C4;">ANSWER</div>
                                <div style="background:rgba(0,217,196,0.07);border-left:3px solid #00D9C4;border-radius:0 8px 8px 0;padding:0.65rem 0.85rem;">
                                  <div id="rc-card-a" style="font-size:0.82rem;font-weight:600;color:#E8F4FD;line-height:1.5;">FSRS maximizes <strong style="color:#00D9C4;">memory retrievability</strong> at review time — scheduling the next interval so you review the card just before you would forget it (~90% target retention), using stability &amp; difficulty parameters.</div>
                                </div>
                                <div style="font-size:0.58rem;color:rgba(255,255,255,0.25);">Next interval = f(stability, difficulty, desired retention)</div>
                              </div>
                            </div>
                          </div>

                          <!-- Grade Buttons (hidden until flipped) -->
                          <div id="rc-grade-section" style="display:none;flex-direction:column;gap:0.5rem;">
                            <div style="font-size:0.62rem;font-weight:800;letter-spacing:0.4px;color:#8BA3C7;text-align:center;">Rate your recall quality (0 = blackout · 5 = perfect)</div>
                            <div style="display:flex;gap:0.35rem;justify-content:center;flex-wrap:wrap;">
                              <button onclick="rcGradeCard(0)" style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);color:#EF4444;padding:0.35rem 0.55rem;border-radius:8px;font-size:0.65rem;font-weight:700;cursor:pointer;transition:all 0.2s;">0<br><span style="font-size:0.5rem;font-weight:400;">Blackout</span></button>
                              <button onclick="rcGradeCard(1)" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);color:#F87171;padding:0.35rem 0.55rem;border-radius:8px;font-size:0.65rem;font-weight:700;cursor:pointer;transition:all 0.2s;">1<br><span style="font-size:0.5rem;font-weight:400;">Wrong</span></button>
                              <button onclick="rcGradeCard(2)" style="background:rgba(245,166,35,0.1);border:1px solid rgba(245,166,35,0.3);color:#F5A623;padding:0.35rem 0.55rem;border-radius:8px;font-size:0.65rem;font-weight:700;cursor:pointer;transition:all 0.2s;">2<br><span style="font-size:0.5rem;font-weight:400;">Hard</span></button>
                              <button onclick="rcGradeCard(3)" style="background:rgba(245,166,35,0.1);border:1px solid rgba(245,166,35,0.3);color:#F5A623;padding:0.35rem 0.55rem;border-radius:8px;font-size:0.65rem;font-weight:700;cursor:pointer;transition:all 0.2s;">3<br><span style="font-size:0.5rem;font-weight:400;">Good</span></button>
                              <button onclick="rcGradeCard(4)" style="background:rgba(0,217,196,0.1);border:1px solid rgba(0,217,196,0.3);color:#00D9C4;padding:0.35rem 0.55rem;border-radius:8px;font-size:0.65rem;font-weight:700;cursor:pointer;transition:all 0.2s;">4<br><span style="font-size:0.5rem;font-weight:400;">Easy</span></button>
                              <button onclick="rcGradeCard(5)" style="background:rgba(0,217,196,0.15);border:1px solid rgba(0,217,196,0.5);color:#00D9C4;padding:0.35rem 0.55rem;border-radius:8px;font-size:0.65rem;font-weight:700;cursor:pointer;transition:all 0.2s;">5<br><span style="font-size:0.5rem;font-weight:400;">Perfect</span></button>
                            </div>
                          </div>

                          <!-- Crystallization burst overlay -->
                          <div id="rc-burst-overlay" style="display:none;position:absolute;inset:0;pointer-events:none;z-index:50;overflow:hidden;">
                            <div id="rc-burst-inner" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:2rem;animation:rcBurstAnim 0.8s ease forwards;">✨</div>
                          </div>

                          <style>
                          @keyframes rcBurstAnim { 0%{opacity:0;transform:scale(0.5)} 30%{opacity:1;transform:scale(1.3)} 100%{opacity:0;transform:scale(2)} }
                          #rc-flashcard.flipped { transform: rotateY(180deg); }
                          </style>
                          <script>
                          var rcCardFlipped = false;
                          var rcCardIndex = 1;
                          var rcCards = [
                            {q:"Q: What does the FSRS algorithm optimize for when scheduling a card review?", a:"FSRS maximizes <strong style='color:#00D9C4'>memory retrievability</strong> at review time — scheduling the next interval so you review the card just before you would forget it (~90% target retention), using stability & difficulty parameters."},
                            {q:"Q: What % of information is lost within 48 hours without active recall?", a:"~<strong style='color:#00D9C4'>80%</strong> — as shown by Ebbinghaus (1885) exponential decay curve. The forgetting function is R = e^(−t/S) where S is stability."},
                            {q:"Q: What brain region drives memory consolidation during sleep?", a:"The <strong style='color:#00D9C4'>hippocampus</strong> — replays experiences during slow-wave sleep to transfer memories to the neocortex for long-term storage."},
                          ];
                          function rcFlipCard() {
                            if(rcCardFlipped) return;
                            rcCardFlipped = true;
                            document.getElementById('rc-flashcard').classList.add('flipped');
                            document.getElementById('rc-grade-section').style.display='flex';
                          }
                          function rcGradeCard(grade) {
                            // Crystallization burst for grade >= 3
                            if(grade >= 3){
                              const burst = document.getElementById('rc-burst-overlay');
                              burst.style.display='block';
                              burst.querySelector('#rc-burst-inner').style.animation='none';
                              burst.querySelector('#rc-burst-inner').style.animation='rcBurstAnim 0.8s ease forwards';
                              setTimeout(()=>burst.style.display='none', 900);
                            }
                            // Advance card
                            rcCardIndex = Math.min(rcCardIndex+1, 8);
                            const pct = (rcCardIndex-1)/8*100;
                            document.getElementById('rc-rv-bar').style.width=Math.max(pct,12.5)+'%';
                            document.getElementById('rc-rv-progress').textContent='Card '+rcCardIndex+' of 8';
                            // Load next card data
                            const cd = rcCards[(rcCardIndex-1)%rcCards.length];
                            document.getElementById('rc-card-q').textContent = cd.q;
                            document.getElementById('rc-card-a').innerHTML = cd.a;
                            // Reset flip
                            rcCardFlipped = false;
                            const fc = document.getElementById('rc-flashcard');
                            fc.style.transition='none';
                            fc.classList.remove('flipped');
                            setTimeout(()=>fc.style.transition='transform 0.55s cubic-bezier(0.4,0,0.2,1)',50);
                            document.getElementById('rc-grade-section').style.display='none';
                          }
                          </script>
                        </div>
                    `
                },
                {
                    title: "📝 Topic Assessment Engine",
                    url: "recall.app/dashboard/assess",
                    description: "AI-generated deep understanding assessments every 3 days. Evaluates recall, short-answer responses, and applied scenario questions. Tracks mastery history over time to measure long-term retention.",
                    preview: "assets/recall-assess.png",
                    contentHtml: `
                        <div class="rc-dashboard-wrapper" style="padding:0.75rem;min-height:340px;font-size:0.78rem;">
                          <!-- Topbar -->
                          <div class="rc-topbar" style="padding-bottom:0.6rem;margin-bottom:0.75rem;">
                            <div class="rc-topbar-left">
                              <div class="rc-brand-badge">★</div>
                              <div class="rc-brand-text"><span class="rc-b-title">RECALL</span><span class="rc-b-sub">ASSESSMENT</span></div>
                            </div>
                            <span style="background:rgba(245,166,35,0.12);color:#F5A623;border:1px solid rgba(245,166,35,0.3);padding:0.2rem 0.55rem;border-radius:10px;font-size:0.62rem;font-weight:700;">📝 3-Day Assessment</span>
                          </div>

                          <!-- Assessment header -->
                          <div style="background:linear-gradient(135deg,rgba(0,217,196,0.08),rgba(245,166,35,0.05));border:1px solid rgba(0,217,196,0.2);border-radius:10px;padding:0.65rem 0.85rem;margin-bottom:0.75rem;display:flex;align-items:center;justify-content:space-between;">
                            <div>
                              <div style="color:#E8F4FD;font-weight:700;font-size:0.8rem;margin-bottom:0.15rem;">🧠 Distributed Systems — Deep Assessment</div>
                              <div style="color:#8BA3C7;font-size:0.62rem;">Topic: Consensus Algorithms · 3 questions · ~8 min</div>
                            </div>
                            <div style="text-align:right;">
                              <div style="color:#00D9C4;font-weight:700;font-size:0.75rem;" id="rc-assess-score-display">0 / 3</div>
                              <div style="color:#8BA3C7;font-size:0.58rem;">completed</div>
                            </div>
                          </div>

                          <!-- Questions -->
                          <div style="display:flex;flex-direction:column;gap:0.55rem;">

                            <!-- Q1: Multiple Choice -->
                            <div id="rc-aq-1" style="background:#0F1629;border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:0.65rem 0.8rem;transition:border-color 0.25s;">
                              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.45rem;">
                                <span style="font-size:0.6rem;font-weight:800;letter-spacing:0.4px;color:#00D9C4;">Q1 · RECALL</span>
                                <span id="rc-aq-1-status" style="font-size:0.58rem;color:#8BA3C7;background:rgba(255,255,255,0.06);padding:0.1rem 0.4rem;border-radius:4px;">Unanswered</span>
                              </div>
                              <div style="color:#E8F4FD;font-weight:600;font-size:0.78rem;line-height:1.4;margin-bottom:0.55rem;">In the Raft consensus algorithm, what is the minimum number of nodes needed for a cluster to tolerate 1 server failure?</div>
                              <div style="display:flex;flex-direction:column;gap:0.3rem;" id="rc-aq-1-opts">
                                <button onclick="rcAnswerMC(1,'A')" class="rc-mc-opt" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:#8BA3C7;padding:0.35rem 0.6rem;border-radius:7px;font-size:0.7rem;text-align:left;cursor:pointer;transition:all 0.2s;font-family:inherit;">A) 2 nodes</button>
                                <button onclick="rcAnswerMC(1,'B')" class="rc-mc-opt" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:#8BA3C7;padding:0.35rem 0.6rem;border-radius:7px;font-size:0.7rem;text-align:left;cursor:pointer;transition:all 0.2s;font-family:inherit;">B) 3 nodes ✓</button>
                                <button onclick="rcAnswerMC(1,'C')" class="rc-mc-opt" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:#8BA3C7;padding:0.35rem 0.6rem;border-radius:7px;font-size:0.7rem;text-align:left;cursor:pointer;transition:all 0.2s;font-family:inherit;">C) 4 nodes</button>
                                <button onclick="rcAnswerMC(1,'D')" class="rc-mc-opt" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:#8BA3C7;padding:0.35rem 0.6rem;border-radius:7px;font-size:0.7rem;text-align:left;cursor:pointer;transition:all 0.2s;font-family:inherit;">D) 5 nodes</button>
                              </div>
                            </div>

                            <!-- Q2: Short Answer -->
                            <div id="rc-aq-2" style="background:#0F1629;border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:0.65rem 0.8rem;transition:border-color 0.25s;">
                              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.45rem;">
                                <span style="font-size:0.6rem;font-weight:800;letter-spacing:0.4px;color:#F5A623;">Q2 · SHORT ANSWER</span>
                                <span id="rc-aq-2-status" style="font-size:0.58rem;color:#8BA3C7;background:rgba(255,255,255,0.06);padding:0.1rem 0.4rem;border-radius:4px;">Unanswered</span>
                              </div>
                              <div style="color:#E8F4FD;font-weight:600;font-size:0.78rem;line-height:1.4;margin-bottom:0.55rem;">Explain how the FSRS algorithm differs from SuperMemo-2 in tracking memory stability.</div>
                              <div style="background:#080B14;border:1px solid rgba(255,255,255,0.08);border-radius:7px;padding:0.4rem 0.55rem;margin-bottom:0.4rem;">
                                <textarea id="rc-aq-2-input" placeholder="Type your answer here..." style="width:100%;background:transparent;border:none;outline:none;color:#E8F4FD;font-size:0.72rem;font-family:inherit;resize:none;min-height:48px;line-height:1.4;" onkeyup="rcCheckSALength(2)" rows="2"></textarea>
                              </div>
                              <button onclick="rcSubmitSA(2)" style="background:linear-gradient(90deg,#00D9C4,#00B5A5);color:#080B14;border:none;padding:0.3rem 0.85rem;border-radius:6px;font-size:0.65rem;font-weight:800;cursor:pointer;font-family:inherit;">Submit for AI Grading →</button>
                            </div>

                            <!-- Q3: Applied Scenario -->
                            <div id="rc-aq-3" style="background:#0F1629;border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:0.65rem 0.8rem;transition:border-color 0.25s;">
                              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.45rem;">
                                <span style="font-size:0.6rem;font-weight:800;letter-spacing:0.4px;color:#FF6B9D;">Q3 · APPLIED SCENARIO</span>
                                <span id="rc-aq-3-status" style="font-size:0.58rem;color:#8BA3C7;background:rgba(255,255,255,0.06);padding:0.1rem 0.4rem;border-radius:4px;">Unanswered</span>
                              </div>
                              <div style="color:#E8F4FD;font-weight:600;font-size:0.78rem;line-height:1.4;margin-bottom:0.35rem;">Scenario: You're designing a distributed key-value store that requires strong consistency. A network partition splits your 5-node Raft cluster into groups of 2 and 3. What happens, and why?</div>
                              <div style="background:rgba(255,107,157,0.06);border:1px solid rgba(255,107,157,0.2);border-radius:7px;padding:0.45rem 0.65rem;margin-bottom:0.45rem;font-size:0.62rem;color:#8BA3C7;">💡 Hint: Consider majority quorum requirements and CAP theorem trade-offs</div>
                              <div style="background:#080B14;border:1px solid rgba(255,255,255,0.08);border-radius:7px;padding:0.4rem 0.55rem;margin-bottom:0.4rem;">
                                <textarea id="rc-aq-3-input" placeholder="Describe what each partition does..." style="width:100%;background:transparent;border:none;outline:none;color:#E8F4FD;font-size:0.72rem;font-family:inherit;resize:none;min-height:48px;line-height:1.4;" rows="2"></textarea>
                              </div>
                              <button onclick="rcSubmitSA(3)" style="background:linear-gradient(90deg,#FF6B9D,#D94F80);color:#fff;border:none;padding:0.3rem 0.85rem;border-radius:6px;font-size:0.65rem;font-weight:800;cursor:pointer;font-family:inherit;">Submit for AI Grading →</button>
                            </div>
                          </div>

                          <!-- Mastery bar -->
                          <div style="margin-top:0.75rem;background:#0F1629;border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:0.55rem 0.75rem;">
                            <div style="display:flex;justify-content:space-between;font-size:0.62rem;margin-bottom:0.35rem;">
                              <span style="color:#8BA3C7;font-weight:600;">Topic Mastery — Distributed Systems</span>
                              <span style="color:#F5A623;font-weight:700;" id="rc-mastery-pct">68%</span>
                            </div>
                            <div style="background:#080B14;border-radius:3px;height:5px;overflow:hidden;">
                              <div id="rc-mastery-bar" style="height:100%;width:68%;background:linear-gradient(90deg,#F5A623,#00D9C4);border-radius:3px;transition:width 0.5s ease;"></div>
                            </div>
                            <div style="color:#8BA3C7;font-size:0.58rem;margin-top:0.3rem;">Next assessment in <strong style="color:#00D9C4;">3 days</strong> · Last score: 72% (Jul 17)</div>
                          </div>

                          <script>
                          var rcAssessCompleted = 0;
                          var rcMastery = 68;
                          function rcAnswerMC(qn, choice) {
                            const opts = document.querySelectorAll('#rc-aq-'+qn+'-opts .rc-mc-opt');
                            const correct = 'B';
                            opts.forEach((btn,i)=>{
                              btn.disabled = true;
                              const ltr = ['A','B','C','D'][i];
                              if(ltr===correct){ btn.style.background='rgba(0,217,196,0.15)';btn.style.borderColor='rgba(0,217,196,0.5)';btn.style.color='#00D9C4'; }
                              else if(ltr===choice && choice!==correct){ btn.style.background='rgba(239,68,68,0.12)';btn.style.borderColor='rgba(239,68,68,0.4)';btn.style.color='#EF4444'; }
                            });
                            const status = document.getElementById('rc-aq-'+qn+'-status');
                            const card = document.getElementById('rc-aq-'+qn);
                            if(choice===correct){
                              status.textContent='✅ Correct!'; status.style.color='#00D9C4'; status.style.background='rgba(0,217,196,0.1)';
                              card.style.borderColor='rgba(0,217,196,0.4)';
                              rcAssessCompleted++; rcUpdateScore(); rcMastery=Math.min(100,rcMastery+8); rcUpdateMastery();
                            } else {
                              status.textContent='❌ Wrong'; status.style.color='#EF4444'; status.style.background='rgba(239,68,68,0.1)';
                              card.style.borderColor='rgba(239,68,68,0.3)';
                              rcAssessCompleted++; rcUpdateScore();
                            }
                          }
                          function rcSubmitSA(qn){
                            const input = document.getElementById('rc-aq-'+qn+'-input');
                            if(!input.value.trim()){ input.style.borderColor='rgba(239,68,68,0.4)'; return; }
                            const status = document.getElementById('rc-aq-'+qn+'-status');
                            const card = document.getElementById('rc-aq-'+qn);
                            status.textContent='⏳ AI Grading...'; status.style.color='#F5A623'; status.style.background='rgba(245,166,35,0.1)';
                            input.disabled=true;
                            setTimeout(()=>{
                              const score = input.value.length>50?88:45;
                              const good=score>=60;
                              status.textContent=(good?'✅ ':'⚠️ ')+score+'% — '+(good?'Strong recall':'Needs more depth');
                              status.style.color=good?'#00D9C4':'#F5A623';
                              status.style.background=good?'rgba(0,217,196,0.1)':'rgba(245,166,35,0.1)';
                              card.style.borderColor=good?'rgba(0,217,196,0.4)':'rgba(245,166,35,0.35)';
                              if(good){rcMastery=Math.min(100,rcMastery+6);rcUpdateMastery();}
                              rcAssessCompleted++; rcUpdateScore();
                            },1200);
                          }
                          function rcUpdateScore(){
                            document.getElementById('rc-assess-score-display').textContent=rcAssessCompleted+' / 3';
                          }
                          function rcUpdateMastery(){
                            document.getElementById('rc-mastery-bar').style.width=rcMastery+'%';
                            document.getElementById('rc-mastery-pct').textContent=rcMastery+'%';
                          }
                          </script>
                        </div>
                    `
                },
            ],
            hotspots: [
                { x: 25, y: 27, title: "📄 Document & Ingestion Engine", desc: "Ingest PDFs, Web URLs, and raw text notes. AI workers extract structured knowledge and break material into atomic concepts with 1536-dim pgvector embeddings." },
                { x: 75, y: 27, title: "🧠 Concept Generator & Semantic Edges", desc: "Automated Concept Generator and Relationship Mapper linking concepts with semantic directional edges (prerequisite_of, analogous_to, extends, part_of) + Flashcard Engine Q&A." },
                { x: 25, y: 73, title: "🌌 R3F / Three.js 3D Universe", desc: "Interactive WebGL starfield graph scaling Star Size by centrality (connected relationships) & Brightness/Color by Memory Score (🟢 Aurora ≥70%, 🟠 Supernova 40–69%, 🔴 Nova <40%) with Memory Pulse rings." },
                { x: 75, y: 73, title: "🔄 SM-2 / FSRS & 3-Day Assessment", desc: "Spaced Repetition daily reviews graded 0 to 5 triggering visual crystallization light bursts + AI 3-Day Deep Assessments (recall, short answer, applied scenarios) with long-term retention tracking." }
            ]
        },
        systemDesign: {
            description: "Full-stack TypeScript monorepo architecture with Next.js 15 App Router frontend, NestJS + Fastify REST/WS backend API, PostgreSQL + pgvector storage, Redis BullMQ queues, and AI Document/Assessment workers.",
            nodes: [
                { id: "next_frontend", label: "Next.js 15 App Router", type: "client", x: 50, y: 150, info: "React 19, Tailwind CSS, React Three Fiber 3D Canvas, Zustand state." },
                { id: "nestjs_api", label: "NestJS + Fastify API", type: "gateway", x: 240, y: 150, info: "REST controllers, WebSocket gateway, Prisma ORM data layer." },
                { id: "postgres_db", label: "PostgreSQL + pgvector", type: "database", x: 440, y: 50, info: "Schema storage for Users, Concepts, MemoryScores, and 1536-dim vector embeddings." },
                { id: "redis_queue", label: "Redis & BullMQ", type: "cache", x: 440, y: 250, info: "Queues for document ingestion, AI concept extraction, and session caching." },
                { id: "ai_workers", label: "AI Pipeline Workers", type: "service", x: 630, y: 150, info: "LLM worker services for document extraction, graph building, and 3-Day test grading." }
            ],
            edges: [
                { from: "next_frontend", to: "nestjs_api", label: "HTTP / WebSockets", animated: true },
                { from: "nestjs_api", to: "postgres_db", label: "Prisma Queries", animated: true },
                { from: "nestjs_api", to: "redis_queue", label: "Enqueue Jobs", animated: true },
                { from: "redis_queue", to: "ai_workers", label: "Process Pipeline", animated: true },
                { from: "ai_workers", to: "postgres_db", label: "Save Embeddings & Tests", animated: false }
            ]
        },
        video: {
            videoTitle: "RECALL Demo Walkthrough",
            videoDuration: "1:00",
            videoUrl: "assets/RECALL_demo.mp4",
            explanationPoints: []
        },
        features: {
            mockupTitle: "RECALL — Core Capabilities Architecture",
            mockupHtml: `
                <div class="rc-features-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; padding:1.25rem; background:var(--bg-page); width:100%; box-sizing:border-box; border-radius:16px;">
                    <div class="rc-feat-card" id="hotspot-ingestion" style="background:var(--bg-card); border:1px solid var(--border-card); border-radius:16px; padding:1.1rem; display:flex; flex-direction:column; gap:0.6rem; position:relative; overflow:hidden;">
                        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.5rem;">
                            <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#00D9C4,#00B4D8);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">📄</div>
                            <div>
                                <div style="font-size:0.82rem;font-weight:800;color:var(--text-main);font-family:var(--font-heading);">Document Ingestion Pipeline</div>
                                <div style="font-size:0.68rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">PDFs, URLs & Raw Notes</div>
                            </div>
                        </div>
                        <img src="assets/recall-upload.png" alt="Document Ingestion" style="width:100%; height:180px; object-fit:cover; border-radius:12px; border:1px solid var(--border-card);">
                    </div>

                    <div class="rc-feat-card" id="hotspot-graph" style="background:var(--bg-card); border:1px solid var(--border-card); border-radius:16px; padding:1.1rem; display:flex; flex-direction:column; gap:0.6rem; position:relative; overflow:hidden;">
                        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.5rem;">
                            <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#a855f7,#ec4899);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">🧠</div>
                            <div>
                                <div style="font-size:0.82rem;font-weight:800;color:var(--text-main);font-family:var(--font-heading);">AI Concept Graph & Edges</div>
                                <div style="font-size:0.68rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Semantic Relationships</div>
                            </div>
                        </div>
                        <img src="assets/recall-dashboard.png" alt="AI Concept Graph" style="width:100%; height:180px; object-fit:cover; border-radius:12px; border:1px solid var(--border-card);">
                    </div>

                    <div class="rc-feat-card" id="hotspot-universe" style="background:var(--bg-card); border:1px solid var(--border-card); border-radius:16px; padding:1.1rem; display:flex; flex-direction:column; gap:0.6rem; position:relative; overflow:hidden;">
                        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.5rem;">
                            <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#f59e0b,#fbbf24);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">🌌</div>
                            <div>
                                <div style="font-size:0.82rem;font-weight:800;color:var(--text-main);font-family:var(--font-heading);">Interactive 3D Galaxy (R3F)</div>
                                <div style="font-size:0.68rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Three.js Spatial WebGL</div>
                            </div>
                        </div>
                        <img src="assets/recall-universe.png" alt="3D Galaxy" style="width:100%; height:180px; object-fit:cover; border-radius:12px; border:1px solid var(--border-card);">
                    </div>

                    <div class="rc-feat-card" id="hotspot-review" style="background:var(--bg-card); border:1px solid var(--border-card); border-radius:16px; padding:1.1rem; display:flex; flex-direction:column; gap:0.6rem; position:relative; overflow:hidden;">
                        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.5rem;">
                            <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#10b981,#3b82f6);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">🔄</div>
                            <div>
                                <div style="font-size:0.82rem;font-weight:800;color:var(--text-main);font-family:var(--font-heading);">SM-2 / FSRS Review & Assessment</div>
                                <div style="font-size:0.68rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Crystallization Burst</div>
                            </div>
                        </div>
                        <img src="assets/recall-assess.png" alt="Assessment & Review" style="width:100%; height:180px; object-fit:cover; border-radius:12px; border:1px solid var(--border-card);">
                    </div>
                </div>
            `,
            hotspots: [
                { x: 25, y: 27, title: "📄 Document Ingestion Pipeline", desc: "Ingest PDFs, Web URLs, and raw text notes. AI background workers extract structured knowledge and break material into atomic concepts with 1536-dim pgvector embeddings." },
                { x: 75, y: 27, title: "🧠 Concept Generator & Semantic Edges", desc: "Automated Concept Generator and Relationship Mapper linking concepts with semantic directional edges (prerequisite_of, analogous_to, extends, part_of) + Flashcard Engine Q&A." },
                { x: 25, y: 73, title: "🌌 R3F / Three.js 3D Universe", desc: "Interactive WebGL starfield graph scaling Star Size by centrality (connected relationships) & Brightness/Color by Memory Score (🟢 Aurora ≥70%, 🟠 Supernova 40–69%, 🔴 Nova <40%) with Memory Pulse rings." },
                { x: 75, y: 73, title: "🔄 SM-2 / FSRS & 3-Day Assessment", desc: "Spaced Repetition daily reviews graded 0 to 5 triggering visual crystallization light bursts + AI 3-Day Deep Assessments (recall, short answer, applied scenarios) with long-term retention tracking." }
            ]
        }
    }
};


