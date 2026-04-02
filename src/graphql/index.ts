import { ClientProps } from "@/types";

export const getAbout = async () => {
  return [
    {
      cursor: "1",
      node: {
        id: "1",
        publishedAt: new Date().toISOString(),
        description:
          "I'm a final year Mechanical Engineering student at NIT Tiruchirappalli — but I've spent most of my undergrad building software products and scaling AI infrastructure. I built ThriftX, a peer-to-peer e-commerce marketplace, entirely from scratch — full-stack, with secure auth, NoSQL data modeling, and seamless deployment. I also architected a self-hosted AI workstation running 10+ open-source LLMs locally on my own GPU, and built a multi-model Book Recommendation Engine trained on 7M+ ratings. On the engineering side, I've done two research internships at IIT Delhi in environmental sensing and fluid dynamics. On the business side, I've run paid acquisition campaigns at Blink Digital for real e-commerce clients. I am the person who can build the complex product and actually take it to users. Most engineers can only do one. I've trained myself to do both.",
      },
    },
  ];
};

export const getProjects = async () => {
  return [
    {
      cursor: "1",
      node: {
        id: "1",
        title: "ThriftX — P2P Marketplace",
        view: "https://thriftx--thriftx-d9051.asia-southeast1.hosted.app/",
        github: "https://github.com/retrostyler/thriftx",
        stack: "Next.js, React, Firebase, Auth, Firestore, Vercel",
        createdAt: "2025-04-01T00:00:00.000Z",
        publishedAt: "2025-04-01T00:00:00.000Z",
        description:
          "A full-stack peer-to-peer thrift marketplace built solo from scratch. Includes seller onboarding, listing standards, dispute handling, user auth, and Firebase deployment. Every layer — frontend, backend, database, auth, deployment — designed and shipped independently.",
      },
    },
    {
      cursor: "2",
      node: {
        id: "2",
        title: "VivaVoce — AI Professor",
        view: "https://vivavoce.vercel.app",
        github: "https://github.com/retrostyler/vivavoce",
        stack: "Next.js, NVIDIA API, Llama 3, Tailwind CSS, Vercel",
        createdAt: "2026-03-01T00:00:00.000Z",
        publishedAt: "2026-03-01T00:00:00.000Z",
        description:
          "AI-powered viva voce practice tool for engineering students. Pick any subject and topic, choose your difficulty mode, and face a strict AI professor who grills you with real exam questions and gives you a scored assessment at the end.",
      },
    },
    {
      cursor: "3",
      node: {
        id: "3",
        title: "Self-Hosted AI Workstation",
        stack: "Ollama, Open WebUI, Python 3.11, Cloudflare Tunnel, Groq API, NVIDIA RTX 4060",
        createdAt: "2026-03-20T00:00:00.000Z",
        publishedAt: "2026-03-20T00:00:00.000Z",
        description:
          "Deployed 10+ open-source LLMs locally on an RTX 4060 using Ollama and Open WebUI. Integrated Groq and OpenRouter cloud APIs in the same interface. Exposed publicly via Cloudflare Tunnel with guest access controls. One-click .bat startup script. ₹0 recurring cost, 40+ tokens/sec local inference.",
      },
    },
    {
      cursor: "4",
      node: {
        id: "4",
        title: "MBAJA 4WD & EBAJA 2WD ATV — PSI Racing",
        stack: "PTC Creo, ANSYS, SolidWorks, CFD, FEA",
        createdAt: "2024-01-01T00:00:00.000Z",
        publishedAt: "2024-01-01T00:00:00.000Z",
        description:
          "Designed pedal assembly, caliper mounts, and wheel hubs for a 4WD off-road ATV. 20% weight reduction via ANSYS topology optimisation. Pioneered regenerative braking for EBAJA. Ranked AIR-2 nationally at BAJA SAEINDIA 2024.",
      },
    },
    {
      cursor: "5",
      node: {
        id: "5",
        title: "Arangam — Artisan Marketplace",
        view: "/reports/arangam-pitchdeck.pdf",
        stack: "Next.js, Supabase, Resend, Tailwind CSS, Vercel",
        createdAt: "2025-01-01T00:00:00.000Z",
        publishedAt: "2025-01-01T00:00:00.000Z",
        description:
          "An early-stage startup connecting rural artisans with urban consumers for personalised handcrafted gifts. Validated through on-ground artisan interviews, consumer research in Bangalore, and cooperative outreach. Presented at Rockfort Venture Club.",
      },
    },
    {
      cursor: "6",
      node: {
        id: "6",
        title: "AI Book Recommendation Engine",
        view: "https://github.com/retrostyler",
        github: "https://github.com/retrostyler",
        stack: "Python, TensorFlow, Keras, FAISS, Sentence-Transformers, Gradio",
        createdAt: "2026-02-01T00:00:00.000Z",
        publishedAt: "2026-02-01T00:00:00.000Z",
        description:
          "Multi-model recommendation engine combining Collaborative Filtering, SVD Matrix Factorization, Neural NCF, and NLP Semantic Search via FAISS. Trained on 7M+ ratings across two datasets. Deployed with a live Gradio UI — type any book title and get real-time recommendations.",
      },
    },
    {
      cursor: "7",
      node: {
        id: "7",
        title: "Telecom Churn Analysis — Full ML Pipeline",
        view: "https://telecom-churn-analysis.netlify.app/",
        stack: "Python, scikit-learn, Pandas, K-Means, PCA, Matplotlib",
        createdAt: "2026-03-15T00:00:00.000Z",
        publishedAt: "2026-03-15T00:00:00.000Z",
        description:
          "End-to-end data science pipeline on 15,000 Indian telecom customers. Soft-voting ensemble (GBM + RF + LR) with AUC 0.76. Segmented customers into personas, flagged Rs 4.77 Crore annual revenue at risk, and deployed a self-contained dark-theme HTML report to Netlify.",
      },
    },
    {
      cursor: "8",
      node: {
        id: "8",
        title: "Energy Extraction — Autorotating Plates",
        view: "/reports/IIT-Delhi-FE2B-Report.pdf",
        stack: "Python, NumPy, Matplotlib, Jupyter, PIV",
        createdAt: "2025-07-01T00:00:00.000Z",
        publishedAt: "2025-07-01T00:00:00.000Z",
        description:
          "IIT Delhi FE2B Lab. Designed experimental setup for fluid energy extraction from autorotating plates. Post-processed PIV data using custom Python pipelines to extract velocity and vorticity fields across frames.",
      },
    },
    {
      cursor: "9",
      node: {
        id: "9",
        title: "Real-Time Air Quality Monitor",
        view: "/reports/IIT-Delhi-AirQuality-Report.pdf",
        stack: "ESP32, Arduino, Python, SCD30, Data Analysis",
        createdAt: "2024-07-01T00:00:00.000Z",
        publishedAt: "2024-07-01T00:00:00.000Z",
        description:
          "IIT Delhi Interdisciplinary Group. Built a real-time CO₂, temperature, and humidity tracker using ESP32 and SCD30. Calibrated against Licor and Testo lab references. Analysed pollution patterns and presented at research symposium.",
      },
    },
    {
      cursor: "10",
      node: {
        id: "10",
        title: "Marketing Automation Stack",
        view: "https://github.com/retrostyler",
        github: "https://github.com/retrostyler",
        stack: "Python, Zapier, Google Sheets, Meta Ads API",
        createdAt: "2025-06-01T00:00:00.000Z",
        publishedAt: "2025-06-01T00:00:00.000Z",
        description:
          "Lightweight marketing automation system built at Blink Digital. Zapier workflows connecting lead forms to Sheets to email follow-ups, Python scripts for automated campaign reporting, and modular dashboards unifying Meta, Google, and email data.",
      },
    },
    {
      cursor: "11",
      node: {
        id: "11",
        title: "Customer Churn Prediction Model",
        view: "https://github.com/retrostyler",
        github: "https://github.com/retrostyler",
        stack: "Python, scikit-learn, XGBoost, Pandas, SMOTE",
        createdAt: "2024-05-01T00:00:00.000Z",
        publishedAt: "2024-05-01T00:00:00.000Z",
        description:
          "Built an ML pipeline achieving 85% accuracy using XGBoost and SMOTE. Conducted EDA with Pandas and Seaborn, delivering a feature set contributing to an estimated 11% reduction in predicted attrition.",
      },
    },
  ];
};

export const getTags = async () => {
  return [
    { cursor: "1", node: { id: "1", name: "Full Stack",   description: "End-to-end web applications"       } },
    { cursor: "2", node: { id: "2", name: "AI / ML",      description: "Machine learning and AI tools"     } },
    { cursor: "3", node: { id: "3", name: "Research",     description: "Academic and lab research"          } },
    { cursor: "4", node: { id: "4", name: "Growth",       description: "Marketing and growth experiments"  } },
    { cursor: "5", node: { id: "5", name: "Engineering",  description: "Hardware and mechanical design"    } },
  ];
};

export const getClient = async (object: ClientProps) => {
  const result = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  return result;
};