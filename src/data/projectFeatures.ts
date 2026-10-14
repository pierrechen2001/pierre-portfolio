export interface ProjectFeature {
  title: { zh: string; en: string };
  summary: { zh: string; en: string };
  why: { zh: string; en: string };
  thinking: { zh: string; en: string };
  size: 'primary' | 'standard';
}

// Keep distinctive product decisions with documented contributions.
// Rationale describes design considerations, not measured learning outcomes.
export const projectFeatures: Record<string, ProjectFeature[]> = {
  "dogtor": [
    {
      "title": {
        "zh": "跨課程的 AI 題庫與多模型檢查",
        "en": "AI question banks with cross-model checks across curricula"
      },
      "summary": {
        "zh": "由我提出題庫生成與檢查架構，涵蓋幾乎所有台灣國高中科目，也延伸至 SAT／AP 等國際課程。",
        "en": "I proposed the question-generation and checking architecture, covering nearly all Taiwanese junior and senior high school subjects and international curricula including SAT and AP."
      },
      "why": {
        "zh": "不同課程有各自的範圍、命題方式與語言要求；大量生成題目時，也需要檢查內容與答案。",
        "en": "Curricula differ in scope, question formats and language requirements. Generating questions at scale also requires checking content and answers."
      },
      "thinking": {
        "zh": "以課程、章節與知識點組織生成流程，依科目調整命題規範，再用多個模型交叉檢查；將同一套架構延伸到台灣與國際課程，支援不同的學習內容。",
        "en": "Organize generation by curriculum, chapter and knowledge point, adapt requirements by subject, and cross-check with multiple models. Extend the architecture across Taiwanese and international curricula to support different learning content."
      },
      "size": "primary"
    },
    {
      "title": {
        "zh": "讓家長看懂學習，也知道如何陪伴",
        "en": "Learning insights parents can act on"
      },
      "summary": {
        "zh": "將答題、錯誤選項與知識點表現整理成家長報告，提供 AI 弱點分析與個人化建議。",
        "en": "Turn answers, incorrect choices and knowledge-point performance into parent reports with AI weakness analysis and guidance."
      },
      "size": "standard",
      "why": {
        "zh": "答題紀錄需要轉成具體的觀念與下一步，家長才能拿來理解孩子的學習狀況。",
        "en": "Answer records need concrete concepts and next steps to help parents understand their child’s learning."
      },
      "thinking": {
        "zh": "依知識點合併相似錯題，讓 AI 參考完整的錯題分布；建議引用實際知識點，並保留生成失敗時的備援內容。",
        "en": "Group related mistakes by knowledge point, give the AI the full mistake distribution, ground suggestions in actual concepts, and retain fallback content when generation fails."
      }
    },
    {
      "title": {
        "zh": "以知識圖譜連結學習分數與個人化複習",
        "en": "Connect learning scores and personalized review through a knowledge graph"
      },
      "summary": {
        "zh": "個人化複習已正式開放，運用知識圖譜計算知識分數，結合學習紀錄與複習時機推薦下一步練習。",
        "en": "Personalized review is live, using a knowledge graph to calculate knowledge scores and combining learning records with review timing to recommend next steps."
      },
      "size": "standard",
      "thinking": {
        "zh": "我提出以知識圖譜為基礎的學習架構，將答題紀錄接到知識分數，再依知識點表現與上次練習時間安排複習優先順序，讓學習分析能回到實際練習。",
        "en": "I proposed a knowledge-graph-based learning architecture that connects answer records to knowledge scores, then prioritizes review using knowledge-point performance and time since practice, linking analytics back to practice."
      },
      "why": {
        "zh": "只展示分數，學生仍要自己決定先練什麼；推薦需要回到具體知識點與練習時機。",
        "en": "Scores alone leave students to decide what to practice. Recommendations need specific concepts and review timing."
      }
    }
  ],
  "mapit": [
    {
      "title": {
        "zh": "讓「看到想吃」接到「真的一起去」",
        "en": "Connect discovering a place to actually going together"
      },
      "summary": {
        "zh": "我提出 MapIt 的產品概念，將社群中的餐廳連結整理成地圖收藏，再串起找回店家、好友選店、邀約與共同造訪。",
        "en": "I proposed the MapIt product concept: organize restaurant links from social platforms on a map, then connect retrieval, choosing places with friends, invitations and shared visits."
      },
      "why": {
        "zh": "想吃的餐廳散落在社群收藏與聊天紀錄中；到了要約朋友時，還需要重新翻找、選店與協調。",
        "en": "Restaurant ideas are scattered across social bookmarks and chats. Planning with friends still requires finding, choosing and coordinating."
      },
      "thinking": {
        "zh": "以「發現 → 收藏 → 找回 → 共同選擇 → 邀約 → 造訪」作為完整產品流程，讓每個功能對應到從線上資訊走向實際行動的一個環節。",
        "en": "Design around discovery, saving, retrieval, shared choice, invitations and visits, with each feature supporting a step from online information to real-world action."
      },
      "size": "primary"
    },
    {
      "title": {
        "zh": "把個人收藏帶進朋友間的共同決策",
        "en": "Bring personal collections into shared decisions"
      },
      "summary": {
        "zh": "產品透過地圖、好友動態、邀約與轉蛋選店，將個人想去的店家帶進朋友間的討論與選擇。",
        "en": "Maps, friends’ activity, invitations and random place selection bring individually saved places into discussion and choice with friends."
      },
      "why": {
        "zh": "整理好自己的收藏後，仍需要和朋友取得共識，才有機會安排實際造訪。",
        "en": "Organizing personal bookmarks still leaves people to reach agreement with friends before arranging a visit."
      },
      "thinking": {
        "zh": "讓收藏地點、朋友的興趣與選店操作接在同一個流程中；地圖提供位置情境，好友互動與轉蛋則提供共同選擇的入口。",
        "en": "Connect saved places, friends’ interests and choosing a venue in one flow. Maps provide geographic context, while social interactions and random selection provide ways to choose together."
      },
      "size": "standard"
    },
    {
      "title": {
        "zh": "研究流程的可行性與人機互動",
        "en": "Study flow feasibility and human–computer interaction"
      },
      "summary": {
        "zh": "以 HCI 角度研究這套流程是否能促進共同決策與實際造訪，並理解使用者在哪些環節遇到阻礙。",
        "en": "Study whether the flow can support shared decisions and actual visits, and where users encounter barriers, through a human–computer interaction perspective."
      },
      "why": {
        "zh": "功能能操作，仍需要進一步理解它是否能進入使用者原本的收藏、選店與邀約習慣。",
        "en": "Working features still need to be examined in the context of people’s existing saving, venue selection and invitation habits."
      },
      "thinking": {
        "zh": "研究聚焦收藏是否會被重新使用、朋友的社交訊號如何影響選店，以及共同意願如何走向邀約與造訪；目前持續研究其互動與流程可行性。",
        "en": "Focus on whether saved places are reused, how friends’ social signals influence venue selection, and how shared interest leads to invitations and visits. Interaction and flow feasibility remain under study."
      },
      "size": "standard"
    }
  ],
  "200ok": [
    {
      "title": {
        "zh": "讓軟體需求有機會被釐清",
        "en": "Make room to clarify software requirements"
      },
      "summary": {
        "zh": "以發案、提案與直接討論串起需求方和工程師的合作流程。",
        "en": "Connect clients and engineers through project posts, proposals and direct discussion."
      },
      "size": "primary",
      "why": {
        "zh": "接案時，業主提供的資訊與工程師需要的資訊常有落差。",
        "en": "Clients’ initial descriptions often differ from the information engineers need."
      },
      "thinking": {
        "zh": "流程從案件資訊開始，再進入提案比較與對話，將需求釐清放進合作過程。",
        "en": "Start with project information, then proposal comparison and conversation, making clarification part of collaboration."
      }
    }
  ],
  "whisper-of-the-abyss": [
    {
      "title": {
        "zh": "光影與動態場景",
        "en": "Lighting and dynamic scenes"
      },
      "summary": {
        "zh": "負責光影設計、光線追蹤與動態背景運算，建立遊戲場景的視覺氛圍。",
        "en": "Work on lighting, ray tracing and dynamic background computation to shape the visual atmosphere."
      },
      "size": "primary",
      "why": {
        "zh": "益智遊戲的場景需要同時承載氛圍與可辨識的操作空間。",
        "en": "Puzzle scenes need both atmosphere and readable spaces for interaction."
      },
      "thinking": {
        "zh": "光影、背景與關卡圖塊一起構成畫面；視覺效果需要配合可遊玩的場景更新。",
        "en": "Lighting, backgrounds and level tiles form one scene, with visual updates tied to playable space."
      }
    },
    {
      "title": {
        "zh": "道具與使用點",
        "en": "Items and matching use points"
      },
      "summary": {
        "zh": "設計並實作道具取得與在對應位置使用的機制。",
        "en": "Design and implement item collection and use at matching points."
      },
      "size": "standard",
      "thinking": {
        "zh": "道具需要對應明確的用途，讓探索與解謎操作互相銜接。",
        "en": "Give items clear uses so exploration connects to puzzle actions."
      },
      "why": {
        "zh": "謎題需要讓玩家在探索中建立「道具可以用在哪裡」的判斷。",
        "en": "Puzzles need players to work out where an item can be used through exploration."
      }
    }
  ],
  "aiplanner": [
    {
      "title": {
        "zh": "用一句話建立行程",
        "en": "Create an event in one sentence"
      },
      "summary": {
        "zh": "以自然語言文字或語音解析日期、時間與事件，加入行事曆。",
        "en": "Parse dates, times and events from natural-language text or speech and add them to the calendar."
      },
      "size": "primary",
      "why": {
        "zh": "建立行程包含多個欄位；日常語句本身已經帶有許多必要資訊。",
        "en": "Event creation has several fields, while everyday language already contains much of the required information."
      },
      "thinking": {
        "zh": "把文字或語音輸入接到事件結構，再接到行事曆，讓輸入方式貼近日常表達。",
        "en": "Connect text or speech to structured event data and then the calendar, keeping input close to everyday expression."
      }
    }
  ],
  "erp-system": [
    {
      "title": {
        "zh": "把一筆服務從接案追到完成",
        "en": "Follow a service job through completion"
      },
      "summary": {
        "zh": "整合客戶紀錄、工單、外勤排程與任務狀態，支援害蟲防治公司的營運流程。",
        "en": "Connect customer records, work orders, field schedules and task status for pest-control operations."
      },
      "size": "primary",
      "why": {
        "zh": "行政與外勤需要依照同一筆服務紀錄協作，才能掌握安排與進度。",
        "en": "Office and field staff need a shared service record to coordinate schedules and progress."
      },
      "thinking": {
        "zh": "以客戶與工單串起各階段資料，讓排程和狀態更新有對應的服務脈絡。",
        "en": "Link each stage through customers and work orders so scheduling and status updates stay in context."
      }
    }
  ],
  "superbot": [
    {
      "title": {
        "zh": "在熟悉的 LINE 裡完成行政操作",
        "en": "Handle administration in a familiar chat"
      },
      "summary": {
        "zh": "獨立開發 LINE 小助手，處理課程提醒、作業追蹤與出勤打卡。",
        "en": "Independently build a LINE assistant for class reminders, homework tracking and attendance."
      },
      "size": "primary",
      "why": {
        "zh": "經營教育業務時，重複查詢與記錄工作持續占用教學和學生支持的時間。",
        "en": "Running an education business involves repeated queries and recording that take time from teaching and student support."
      },
      "thinking": {
        "zh": "讓聊天指令連到 Google Sheets 的資料紀錄與統計，沿用學生熟悉的互動方式。",
        "en": "Connect chat commands to Google Sheets records and summaries, using an interaction students already know."
      }
    }
  ],
  "seven-peach": [
    {
      "title": {
        "zh": "以共同活動作為認識人的入口",
        "en": "Meet people through shared activities"
      },
      "summary": {
        "zh": "為熟齡族群設計活動探索 App，讓參加活動成為拓展社交的入口。",
        "en": "Design activity discovery for older adults, using participation as an entry point to social connection."
      },
      "size": "primary",
      "why": {
        "zh": "長輩需要出門與認識人的機會，也需要容易理解的參與方式。",
        "en": "Older adults need opportunities to go out and meet people, with understandable ways to participate."
      },
      "thinking": {
        "zh": "產品從活動與興趣出發，讓「要做什麼」和「如何參與」形成連續的流程。",
        "en": "Start with activities and interests, connecting what to do with how to join."
      }
    }
  ],
  "lakycarcar": [
    {
      "title": {
        "zh": "讓解謎規則與互動畫面一致",
        "en": "Keep puzzle rules and interaction aligned"
      },
      "summary": {
        "zh": "設計停車場遊戲的核心邏輯與資料結構，計算車輛狀態和合法移動。",
        "en": "Design core puzzle logic and data structures for vehicle states and legal moves."
      },
      "size": "primary",
      "why": {
        "zh": "玩家每次移動都會改變可行路徑，畫面與內部狀態需要一致。",
        "en": "Each move changes possible routes, so visuals and internal state need to agree."
      },
      "thinking": {
        "zh": "以網格表示停車場，再把移動規則接到 SFML 的操作與畫面回饋。",
        "en": "Represent the parking lot as a grid and connect move rules to SFML input and visual feedback."
      }
    }
  ]
};
