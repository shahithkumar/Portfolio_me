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
            videoUrl: "REAL 2.mp4",
            vimeoUrl: "https://player.vimeo.com/video/1206137702?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=0&muted=1&loop=1",
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
            videoUrl: "REAL 2.mp4",
            vimeoUrl: "https://player.vimeo.com/video/1206137702?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=0&muted=1&loop=1",
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
    }
};
