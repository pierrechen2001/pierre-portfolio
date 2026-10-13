export interface ProjectFeature {
  title: { zh: string; en: string };
  summary: { zh: string; en: string };
  why?: { zh: string; en: string };
  thinking?: { zh: string; en: string };
  size: 'primary' | 'standard' | 'supporting';
}

// Curated from documented contributions; rationale describes design considerations,
// not measured outcomes or claims of ownership over every team feature.
export const projectFeatures: Record<string, ProjectFeature[]> = {
  "dogtor": [
    {
      "title": {
        "zh": "讓家長看懂學習，也知道如何陪伴",
        "en": "Learning insights parents can act on"
      },
      "summary": {
        "zh": "將答題、錯誤選項與知識點表現整理成家長報告，提供 AI 弱點分析與個人化建議。",
        "en": "Turn answers, incorrect choices and knowledge-point performance into parent reports with AI weakness analysis and guidance."
      },
      "size": "primary",
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
        "zh": "從學習紀錄走向個人化複習",
        "en": "From learning records to review priorities"
      },
      "summary": {
        "zh": "結合知識點分數與上次練習時間，呈現個人化複習推薦並連到對應練習。",
        "en": "Combine knowledge scores and time since practice to recommend review topics and connect them to practice."
      },
      "size": "standard",
      "thinking": {
        "zh": "推薦需要兼顧目前弱點與複習時機；計分規則集中管理，避免錯題本與關卡使用不同規則，讓分數失去一致性。",
        "en": "Balance weak areas with review timing. Shared scoring rules keep quiz and mistake-book updates consistent."
      }
    },
    {
      "title": {
        "zh": "保存報告，再延伸到網頁分享",
        "en": "Stored reports with a shareable web view"
      },
      "summary": {
        "zh": "保存已生成的家長報告，加入適合手機閱讀的網頁版與分享入口。",
        "en": "Persist generated parent reports and provide a mobile web view with sharing."
      },
      "size": "standard",
      "thinking": {
        "zh": "相同資料可重用既有報告，答題紀錄變動後才重建；LINE 與網頁使用相同內容，減少重複生成與呈現差異。",
        "en": "Reuse a report while answer activity is unchanged. LINE and the web render the same content to avoid repeated generation and inconsistent presentation."
      }
    },
    {
      "title": {
        "zh": "AI 與資料流程",
        "en": "AI and data workflows"
      },
      "summary": {
        "zh": "建立知識點模型、LLM 編排及事件蒐集，支援學習分析與題庫處理。",
        "en": "Build knowledge-point models, LLM orchestration and event collection for learning analytics and question processing."
      },
      "size": "supporting"
    },
    {
      "title": {
        "zh": "正式環境後端",
        "en": "Production backend"
      },
      "summary": {
        "zh": "以 FastAPI、Cloud Run 與 Cloud SQL 支援產品，處理報告生成阻塞及非同步流程的穩定性。",
        "en": "Support the product with FastAPI, Cloud Run and Cloud SQL, addressing blocking report generation and asynchronous stability."
      },
      "size": "supporting"
    }
  ],
  "mapit": [
    {
      "title": {
        "zh": "把收藏放回地圖上的情境",
        "en": "Put saved places back in context"
      },
      "summary": {
        "zh": "導入 Mapbox，調整地圖手勢、收藏圖釘與地點探索體驗。",
        "en": "Integrate Mapbox and refine gestures, saved pins and place discovery."
      },
      "size": "primary",
      "why": {
        "zh": "收藏之後還需要找得到；地圖讓地點、距離與周邊關係一起呈現。",
        "en": "Saved places need to be retrievable. A map brings location, distance and nearby options into the same view."
      },
      "thinking": {
        "zh": "地圖互動與收藏載入要一起考量，兼顧探索時的操作、圖釘呈現及快取。",
        "en": "Consider interaction and loading together, including exploration gestures, pin presentation and caching."
      }
    },
    {
      "title": {
        "zh": "從連結到可確認的店家",
        "en": "From links to reviewable places"
      },
      "summary": {
        "zh": "參與連結解析提示詞與後處理優化，將社群資訊轉成可加入收藏的店家資料。",
        "en": "Improve link-parsing prompts and post-processing to turn social content into saved-place data."
      },
      "size": "standard",
      "thinking": {
        "zh": "解析結果提供給使用者確認後再收藏，讓資訊擷取接得上實際使用流程。",
        "en": "Let users review extracted places before saving, connecting extraction to the actual save flow."
      }
    },
    {
      "title": {
        "zh": "共同造訪與個人紀錄",
        "en": "Shared visits and personal records"
      },
      "summary": {
        "zh": "參與個人檔案、共同造訪紀錄與收藏地點的載入改善。",
        "en": "Contribute to profiles, shared-visit records and saved-place loading."
      },
      "size": "standard",
      "thinking": {
        "zh": "收藏、邀約與造訪需要前後銜接；個人紀錄與共同紀錄提供不同的回顧情境。",
        "en": "Connect saving, invitations and visits; personal and shared records support different ways to look back."
      }
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
    },
    {
      "title": {
        "zh": "平台資料與操作流程",
        "en": "Platform data and workflows"
      },
      "summary": {
        "zh": "參與全端平台開發，串接案件與提案的操作流程。",
        "en": "Contribute to full-stack development and project and proposal workflows."
      },
      "size": "standard",
      "thinking": {
        "zh": "案件與提案需要清楚的狀態，讓兩種角色知道目前進度與下一個操作。",
        "en": "Clear project and proposal states help both roles understand progress and the next action."
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
        "zh": "圖塊關卡系統",
        "en": "Tile-based levels"
      },
      "summary": {
        "zh": "建立 Tileset 地圖系統，支援以圖塊組合遊戲關卡。",
        "en": "Build the tileset map system used to compose levels."
      },
      "size": "standard",
      "thinking": {
        "zh": "把場景組成單位整理成圖塊，讓關卡配置有一致的組合方式。",
        "en": "Tiles give level layouts a consistent set of building blocks."
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
    },
    {
      "title": {
        "zh": "原生 iOS 體驗",
        "en": "Native iOS experience"
      },
      "summary": {
        "zh": "使用 Swift 設計與開發行程介面，呈現建立後的事件。",
        "en": "Design and build the scheduling interface in Swift to display created events."
      },
      "size": "standard",
      "thinking": {
        "zh": "解析後的行程仍需清楚可讀，介面以簡潔的行程管理為核心。",
        "en": "Parsed events still need to be readable, with a simple interface centered on scheduling."
      }
    },
    {
      "title": {
        "zh": "個人與共享資料",
        "en": "Personal and shared data"
      },
      "summary": {
        "zh": "整合 iCloud 同步及 Supabase 帳號與共享事件儲存。",
        "en": "Integrate iCloud sync with Supabase authentication and shared-event storage."
      },
      "size": "standard",
      "thinking": {
        "zh": "個人同步與共享事件是不同的資料需求，分別由對應服務支援。",
        "en": "Personal sync and shared events have different data needs, supported by their respective services."
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
    },
    {
      "title": {
        "zh": "資料管理與登入",
        "en": "Data management and sign-in"
      },
      "summary": {
        "zh": "主導 React、TypeScript 與 Firebase 的前後端開發，整合登入與資料儲存。",
        "en": "Lead frontend and backend development with React, TypeScript and Firebase, including sign-in and storage."
      },
      "size": "supporting"
    },
    {
      "title": {
        "zh": "營運報表",
        "en": "Operational reporting"
      },
      "summary": {
        "zh": "將服務與任務資料整理成營運報表，支援查看工作紀錄。",
        "en": "Organize service and task data into operational reports for reviewing work records."
      },
      "size": "supporting"
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
    },
    {
      "title": {
        "zh": "出勤與時數整理",
        "en": "Attendance and hours"
      },
      "summary": {
        "zh": "記錄打卡時間，計算出席時數並匯出紀錄。",
        "en": "Record check-in times, calculate attendance hours and export records."
      },
      "size": "standard",
      "thinking": {
        "zh": "以打卡資料接續時數統計，讓日常紀錄能用於後續行政處理。",
        "en": "Carry check-in data into hour summaries so daily records support later administration."
      }
    },
    {
      "title": {
        "zh": "部署與資料串接",
        "en": "Deployment and integration"
      },
      "summary": {
        "zh": "整合 Python、LINE API 與 Google Sheets API，並部署於 Heroku。",
        "en": "Integrate Python, LINE API and Google Sheets API and deploy on Heroku."
      },
      "size": "supporting"
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
    },
    {
      "title": {
        "zh": "熟齡友善的行動介面",
        "en": "An interface for older adults"
      },
      "summary": {
        "zh": "以 Flutter 開發活動探索介面，將容易操作作為設計重點。",
        "en": "Build activity discovery in Flutter with ease of use as a design focus."
      },
      "size": "standard",
      "thinking": {
        "zh": "主要操作需要容易辨識，讓瀏覽活動與選擇參與的關係清楚。",
        "en": "Make primary actions recognizable and the path from browsing to participation clear."
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
    },
    {
      "title": {
        "zh": "SFML 互動介面",
        "en": "Interactive SFML interface"
      },
      "summary": {
        "zh": "實作滑鼠操作、事件處理與遊戲畫面呈現。",
        "en": "Implement mouse input, event handling and game rendering."
      },
      "size": "supporting"
    },
    {
      "title": {
        "zh": "C++ 結構與記憶體管理",
        "en": "C++ structure and memory management"
      },
      "summary": {
        "zh": "運用物件導向設計與記憶體管理組織遊戲狀態。",
        "en": "Organize game states with object-oriented design and memory management."
      },
      "size": "supporting"
    }
  ]
};
