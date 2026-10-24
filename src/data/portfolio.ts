import { SiteConfig } from '../types/portfolio';

export const siteConfig: SiteConfig = {
  name: 'Mahendra Gurjar',
  role: 'AI/ML Systems & Inference Engineer',
  location: 'Ahmedabad, India • Open to Relocation & Remote',
  headline: 'Building high-performance AI systems from scratch.',
  subheadline:
    "I'm an AI & ML engineer specializing in low-level systems — from writing custom CUDA kernels and LLM inference engines in C++ to re-implementing quantization formats in C and training Mixture-of-Experts architectures. I build below the abstraction layer to measure and optimize real hardware performance.",
  availabilityLabel: 'Available for AI/ML Systems & Research Engineering Roles',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,

  quickStats: [
    {
      value: '~53 tok/s',
      label: 'Inference Speed',
      subtext: 'TinyLlama-1.1B on NVIDIA T4 via custom C++/CUDA engine',
    },
    {
      value: '4.5 bpw',
      label: 'Quantization',
      subtext: 'Reimplemented llama.cpp Q4_0 & Q4_K formats in C',
    },
    {
      value: '2.50',
      label: 'MoE Val Loss',
      subtext: '8-expert architecture trained from scratch (0 dead experts)',
    },
    {
      value: '~45%',
      label: 'Induction Ablation',
      subtext: 'Performance drop on GPT-2 induction head suppression',
    },
  ],

  aboutParagraphs: [
    "I study Artificial Intelligence & Machine Learning at L.D. College of Engineering, Ahmedabad. My core philosophy is implementation-first: I believe you only truly understand an architecture when you implement its forward pass, memory layout, and CUDA kernels from scratch.",
    "My focus centers on LLM inference engines, model quantization (GGUF, AWQ), GPU acceleration, and systems-level ML infrastructure. Rather than relying on black-box frameworks, I've implemented a complete Llama inference engine in C++ and CUDA with zero runtime allocations, rebuilt quantization algorithms in C, and studied mechanistic interpretability inside transformer circuits.",
    "I also build full-stack tools and open-source packages (such as MemTrace for diagnosing AI agent memory failures). I treat engineering quality with rigor — the same standard of precision needed in a CUDA kernel applies to software architecture and system reliability.",
  ],

  skillGroups: [
    {
      category: 'Systems & Low-Level AI',
      skills: ['C++', 'CUDA', 'C', 'cuBLAS', 'Linux', 'CMake', 'Memory Layouts', 'Kernel Optimization'],
    },
    {
      category: 'ML & Deep Learning',
      skills: ['PyTorch', 'Transformers', 'Mixture-of-Experts', 'Fine-Tuning (DPO, PPO, GRPO)', 'Hugging Face'],
    },
    {
      category: 'LLM Systems & Optimization',
      skills: ['Inference Optimization', 'KV Cache', 'Quantization (GGUF, AWQ, GPTQ)', 'Attention Kernels', 'RoPE', 'SwiGLU'],
    },
    {
      category: 'Full-Stack & Infrastructure',
      skills: ['Python', 'FastAPI', 'React', 'TypeScript', 'Docker', 'Neo4j (GraphRAG)', 'Git'],
    },
  ],

  interests: [
    'LLM Inference & Serving',
    'Model Quantization',
    'GPU Computing & CUDA',
    'AI Agents & Tool Use',
    'Machine Learning Systems',
    'Mechanistic Interpretability',
    'Mixture-of-Experts',
    'Open Source Systems',
  ],

  education: {
    degree: 'Bachelor of Engineering, Artificial Intelligence & Machine Learning',
    institution: 'L.D. College of Engineering',
    location: 'Ahmedabad, India',
    period: 'Expected 2027',
    focus: 'LLM Inference Optimization, GPU Computing, Machine Learning Systems',
  },

  projects: [
    {
      name: 'INFERNT',
      category: 'Systems & CUDA',
      featured: true,
      description:
        'A high-performance LLM inference engine for Llama-style architectures written entirely from scratch in C++ and CUDA — zero PyTorch, ONNX, or TensorRT dependencies. Implements custom CUDA kernels for Attention, RMSNorm, RoPE, Softmax, and SwiGLU with cuBLAS matrix multiplications.',
      metrics: ['~53 tokens/s (T4 GPU)', 'Zero Runtime Memory Allocations', 'Custom CUDA Kernels', 'Direct HF Checkpoint Loader'],
      highlights: [
        'Pre-allocates all GPU KV-cache and activation buffers upfront to eliminate runtime malloc overhead',
        'Custom tokenizer and checkpoint reader parses Hugging Face safe-tensors directly',
        'Outputs validated against CPU reference implementation with numerical parity across all layers',
      ],
      tags: ['C++', 'CUDA', 'cuBLAS', 'LLM Inference', 'Memory Optimization'],
      status: 'Active',
      github: 'https://github.com/Mahendra1706/INFERNT',
    },
    {
      name: 'GGML Quantization Study',
      category: 'Systems & CUDA',
      featured: true,
      description:
        "Deep-dive study into llama.cpp quantization internals. Reimplemented Q4_0 and Q4_K 4-bit block quantization formats from scratch in C, evaluating effective compression ratios against perplexity. Quantized TinyLlama-1.1B into GGUF and AWQ variants and published on Hugging Face.",
      metrics: ['~4.5 Bits-per-Weight', 'Rebuilt Q4_0 & Q4_K in C', 'Models on Hugging Face'],
      highlights: [
        'Analyzed quantization scale/min block representations and effective bits-per-weight in C',
        'Built conversion pipeline generating production-ready GGUF and AWQ weights',
        'Published models and benchmarks openly for the open-source community',
      ],
      tags: ['C', 'Quantization', 'GGUF', 'AWQ', 'Hugging Face'],
      status: 'Complete',
      github: 'https://github.com/Mahendra1706/ggml-quantization',
      huggingface: 'https://huggingface.co/mahendra4',
    },
    {
      name: 'Mixture-of-Experts from Scratch',
      category: 'ML & Research',
      featured: true,
      description:
        'Engineered a complete Mixture-of-Experts (MoE) transformer layer with top-2 token routing in PyTorch. Trained an 8-expert model achieving validation loss of 2.50 (compared to random baseline of 4.17). Monitored routing dynamics to verify zero dead experts.',
      metrics: ['Val Loss 2.50 (vs 4.17 baseline)', '8 Dedicated Experts', 'Top-2 Gating with 0 Dead Experts'],
      highlights: [
        'Designed soft-routing gating network with auxiliary load-balancing loss',
        'Logged expert gate distributions across training tokens to ensure even load sharing',
        'Demonstrated compute-efficient capacity expansion without linear inference latency increase',
      ],
      tags: ['PyTorch', 'Mixture-of-Experts', 'Transformer Architectures', 'Deep Learning'],
      status: 'Complete',
      github: 'https://github.com/Mahendra1706/MoE',
    },
    {
      name: 'Mechanistic Interpretability — Induction Heads',
      category: 'ML & Research',
      description:
        'Reverse-engineered in-context pattern matching in GPT-2 small by isolating induction head circuits (pairs of attention heads across layers that implement copy-paste heuristics). Ablating the primary induction head caused an immediate ~45% performance drop on pattern completion.',
      metrics: ['Isolated GPT-2 Induction Heads', '~45% Accuracy Degradation on Ablation'],
      highlights: [
        'Tracked query-key attention scores across sequence prefix matching tasks',
        'Constructed custom visualization matrices showing exact head-to-head copying circuits',
        'Verified mechanistic hypothesis via targeted activation patching and zero-ablation',
      ],
      tags: ['PyTorch', 'Interpretability', 'Transformer Circuits', 'GPT-2'],
      status: 'Complete',
      github: 'https://github.com/Mahendra1706/MechIinterpretability',
    },
    {
      name: 'MemTrace',
      category: 'Open Source & Tools',
      description:
        'An open-source Python diagnostic toolkit for tracing and debugging memory degradation in autonomous AI agents. Traces vector retrieval, context window management, and memory eviction to identify why an agent hallucinated or dropped crucial context.',
      metrics: ['Open Source Python Library', 'Root-Cause Memory Diagnostics'],
      highlights: [
        'Instruments retrieval pipelines and LLM memory buffers to detect stale or conflicting context',
        'Surfaces actionable audit logs pinpointing exact memory drop events',
        'Designed for plug-and-play integration with popular agent frameworks',
      ],
      tags: ['Python', 'AI Agents', 'Memory Tracing', 'Open Source'],
      status: 'Active',
      github: 'https://github.com/Mahendra1706/MemTrace',
    },
    {
      name: 'RAG Architectures & Alignment Notebooks',
      category: 'ML & Research',
      description:
        'Comprehensive implementation of advanced retrieval pipelines (Corrective RAG, Self-RAG, and GraphRAG on Neo4j) along with end-to-end notebooks for post-training alignment using DPO (Direct Preference Optimization), PPO, and GRPO.',
      metrics: ['Corrective RAG & GraphRAG', 'Neo4j Knowledge Graph', 'DPO / PPO / GRPO'],
      highlights: [
        'Built hybrid vector + knowledge graph retrieval on Neo4j for multi-hop relational reasoning',
        'Implemented self-reflective query rewriting and document grading loops',
        'Trained and aligned models on domain-specific datasets using preference optimization',
      ],
      tags: ['Python', 'RAG', 'Neo4j', 'DPO', 'GRPO', 'LangChain'],
      github: 'https://github.com/Mahendra1706/RAG-s',
    },
  ],

  writing: [
    {
      title: 'Technical Notes & Deep Dives',
      description:
        'In-depth breakdowns on LLM inference mechanics, CUDA memory hierarchies, 4-bit quantization arithmetic, and transformer circuit interpretability published on Dev.to.',
      platform: 'Dev.to',
      url: 'https://dev.to/mahendra4',
    },
  ],

  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/Mahendra1706' },
    { label: 'Hugging Face', url: 'https://huggingface.co/mahendra4' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/gurjarmahendra/' },
    { label: 'Dev.to', url: 'https://dev.to/mahendra4' },
  ],

  email: 'mahendra.gurjar4@outlook.com',
  footerTagline: 'Engineered with curiosity, precision, and low-level rigor.',
};
