export interface Note {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  content: {
    en: string;
    zh: string;
  };
  category: {
    en: string;
    zh: string;
  };
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
}

export const notes: Note[] = [

  // Paste this into your src/data/notes.ts file

{
  id: 'dogtor-dev-logthe-idea-behind-our-ai-learning-app',
  title: {
    en: `Dogtor Dev Log：The Idea Behind Our AI Learning App`,
    zh: `Dogtor 開發筆記：App 的發想與起點`
  },
  description: {
    en: `Dogtor blends generative AI with learning psychology—not just an app, but a smart companion designed to help students sustain motivation in an age of distraction.`,
    zh: `結合生成式 AI 與學習心理的 Dogtor，不只是學習 App，更是陪伴學生持續前進的智慧學伴，一場從補教現場出發的教育革新實驗。`
  },
  content: {
    en: `## The Beginning: Not Waiting to Be Replaced, But Choosing to Evolve

Let’s rewind to **early 2024**, when generative AI was exploding across the internet. New tools and applications were popping up like wildfire—exciting, but also a little terrifying.

At that time, I had already been working in the cram school industry for nearly **five years**, doing everything from teaching, admin, to curriculum design.

Back then, I kept asking myself:

**“Will my job still matter in the age of AI?”**

It started as a curiosity—wondering which industries might get replaced by AI. But the more I thought about it, the heavier it felt.

Eventually, I flipped the question around:

**If I’m going to be replaced someday, why not build the tool that replaces me?**

That was the moment Dogtor was born.

---

## Observations from the Frontline: Students Don’t Lack Motivation—They Just Can’t Sustain It

As someone who's worked closely with students for years, I realized something important:

**Students don’t lack motivation. What they lack is rhythm and interaction to sustain that motivation.**

Every student knows they should study more, play fewer games, and that good grades lead to better futures.  
The real challenge is this: **Once they decide to study, how long can they actually stick with it?**

I’ve heard so many students say:

**“Teacher, I really wanted to study today, but the moment I opened my textbook… I just reached for my phone instead.”**

It’s not laziness. It’s that traditional study methods—worksheets, memorization, drills—are repetitive and boring.  
**There’s no interaction, no feedback, no dopamine.**

Learning becomes a long, dull marathon. Eventually, students give up.  
What they truly need is a smart assistant that helps **sustain** their learning momentum.

---

## The Age of Fragmented Attention: Learning Tools Must Be Instant, Lightweight, and Engaging

As I spent more time with students, I also noticed a huge shift:  
Their **attention structure** has changed in this era of fragmented content.

- They don’t watch 30-minute educational videos anymore—they prefer 3-minute Shorts or Reels  
- They don’t need consoles or computers to play games—just a phone with real-time, fast-paced gameplay  
- Their **attention spans are shorter, and their feedback expectations are instant**

So I started asking myself:

**What if learning tools matched that same rhythm?**

I imagined a scene:

**During a 10-minute break at school, or on a metro ride, a student opens their phone—not just to scroll TikTok or play a game—but to complete a quick 3-minute learning session through an app.**

It’s not just a study tool anymore—it becomes a **habit**, a seamless part of their daily life.  
**Learning no longer feels like pressure—it becomes a natural choice.**

---

## Dogtor Is Born: From an Idea to a Work-in-Progress App

As I write this post, it’s now **June 2025**.  
Dogtor is about **60% complete**, with most of the core features up and running. We’re actively testing, tweaking, and improving it every day.

Dogtor is an **AI-powered learning companion** that combines generative AI with interactive learning design.  
It can recommend questions based on student level, generate personalized practice from past mistakes, and provide **daily missions** to encourage consistent progress with instant feedback.

But what matters most is:  
**This isn’t just my project.**

I’m incredibly grateful to the teammates working alongside me—turning this crazy “AI learning buddy” idea into something real.

---

## If I Had to Summarize It in One Sentence…

**Dogtor doesn’t exist to replace teachers—it exists to help students go further, using the power of AI.**

My hope is that one day, students in Taiwan will say,  
“Thanks to Dogtor, studying actually feels fun—and I feel proud of myself again.”

This blog post is the first footprint of that journey.`,
    zh: `## 一切的開始：不是被取代，而是選擇自我進化

時間回到 **2024 年初**，那是一個生成式 AI 如火如荼的時代。各式各樣的應用如雨後春筍般冒出，讓人又驚又怕。那時候的我，已經在補教行業打滾了將近 **5 年**，從講師、行政，到設計教材都做過。

那陣子我常常問自己一個問題：

**「在 AI 時代裡，我的工作還有價值嗎？」**

原本只是好奇「哪些產業可能會被 AI 取代」，但越想越沉重，最後我乾脆轉個念——  
**既然早晚會被取代，不如主動開發一個能取代自己的工具。**

這，就是 Dogtor 誕生的起點。  

---

## 問題觀察：學生不是不想讀書，而是「撐不久」

身為一位長期在第一線的教育工作者，我發現：

**學生缺乏的不是學習動機，而是能延續動機的「節奏」與「互動感」。**

幾乎每個學生都知道「多讀書、少打電動」、「考好有好未來」，  
問題是——**當他們真的想讀書的那一刻，可以撐多久？**

很多學生會說：「老師，我今天真的打算唸，但一看書就很想滑手機...」  
這不是偷懶，而是傳統學習模式太單調：寫考卷、背單字、對答案，**沒有互動性、沒有回饋感。**

學習變得像一場沉悶的馬拉松，久了就會想放棄。  
他們需要的是「能延續學習動機」的助手。

---

## 碎片化時代：學習工具也要「即時、輕巧、有趣」

和學生相處的過程中，我也觀察到另一個關鍵趨勢：  
在這個內容碎片化的時代，學生的「注意力結構」也跟著改變了。

- 他們不再習慣看 30 分鐘的教學影片，而是更喜歡 3 分鐘的 Shorts / Reels  
- 他們不需要電腦或遊戲機，只要一支手機，就能玩即時快節奏的遊戲  
- 他們的 **專注時間更短、對回饋的期待更即時**

那如果學習工具也能符合這樣的節奏會怎樣？

我開始想像一個情境：

**「在十分鐘的下課時間、在捷運上的通勤過程，學生拿出手機，不只是滑抖音、打遊戲，而是打開一個能在 3 分鐘內快速學習的 App。」**

這不只是一種學習方式，而是一種新的生活習慣：  
**學習不再是壓力，而是隨手可得的選擇。**

---

## Dogtor 的誕生：從一個想法，到一個實現中的產品

現在寫下這篇文章的此刻，是 **2025 年 6 月**。  
我們的 Dogtor 開發進度大約完成了 **60%**，已經具備核心功能，也正積極測試與調整。

這是一款結合 **生成式 AI 與學習互動** 的教育工具。  
它能根據學生的程度推薦題目，根據錯誤記錄自動生成練習內容，還能設計「每日任務」，讓學生每天固定完成學習任務並獲得回饋。

更重要的是，**這不是我一個人的作品。**  
我非常感謝現在一起打拼的夥伴們，讓我這個「用 AI 打造學習陪伴者」的念頭，正在逐步實現中。

---

## 一句話總結我的初衷

**Dogtor 的存在，不是要取代老師，而是用 AI 的力量，陪學生走得更遠。**

希望未來，台灣的學生們會因為 Dogtor，感受到學習也可以是快樂又有成就感的事。  
這篇文章，就當作是我們與這個夢想一起啟程的紀錄。`
  },
  category: {
    en: 'Development',
    zh: '開發'
  },
  tags: ['Dogtor', 'AI-app'],
  publishedAt: '2025-06-26',
  updatedAt: '2025-06-26',
  featured: true,
},

  // Paste this into your src/data/notes.ts file

{
    id: 'why-i-stepped-into-software',
    title: {
      en: `Why I Stepped Into Software`,
      zh: `為什麼我選擇走上軟體這條路？`
    },
    description: {
      en: `From chemistry to code—a candid journey of mistaken passion, self-discovery, and falling in love with software development.`,
      zh: `從化學到軟體，一段關於誤打誤撞、自我探索，最後找到熱愛軟體開發的故事。`
    },
    content: {
      en: `## The Accidental Start: When Good Grades Lied to Me
  
  I wasn’t born to be a software engineer.  
  In fact, my first “talent” was chemistry.
  
  In high school, I had an incredible chemistry teacher—**Mr. Hsu**—who made everything so clear and engaging that my grades in chemistry soared way above my other subjects. I didn’t enjoy experiments all that much, but I excelled in the classes because he made the theory come alive.
  
  So I did what many teens would do: I mistook **skill for passion**. And I chose to major in chemistry.
  
  ---
  
  ## Four Years of Drifting
  
  Throughout college, I pushed through lectures, labs, and exams. I checked all the boxes, submitted all the reports, and eventually earned my degree.  
  But deep down, I was running on autopilot.
  
  During my senior year, my classmates were preparing for grad school and lab research. Meanwhile, I was realizing:  
  **I didn’t want any of it. I wasn’t passionate about chemistry at all.**
  
  That moment of honesty hit me hard. I knew I needed to take a different path.
  
  ---
  
  ## A New Direction: Half Logic, Half Instinct
  
  Honestly, choosing **Information Management** was also a bit of a gamble.
  
  I knew software engineering had solid job prospects and good salaries.  
  I didn’t know exactly what I wanted to do, but I had a feeling this career could give me the kind of life I imagined.  
  And one thing I knew for sure: "I’m a fast learner, and I’m not afraid to start over."
  
  When I first started learning to code, I honestly had no idea what I was doing.  
  The syntax felt foreign, debugging was chaotic, and every new concept was a mini mountain to climb.  
  But by the end of my first semester, I teamed up with **Stonk, Iris, and Angelica** to build a little puzzle game called **LakyCarcar**.
  
  That was the moment it clicked: **I genuinely enjoyed this.**
  
  Coding stopped being just an assignment—it became something creative, challenging, and deeply satisfying.
  
  ---
  
  ## I Genuinely Love Development
  
  As I kept diving in, I realized something important:  
  I wasn’t just doing this for the paycheck.
  
  I **genuinely love building software**.  
  Turning an idea into a working product, figuring out how to solve real problems with code, getting that “it works!” moment after hours of debugging—it’s addicting.
  
  I love the creation. I love the problem-solving.  
  I love knowing my work can actually help someone.
  
  ---
  
  ## I Found the Right Path
  
  I won’t lie—sometimes I still feel anxious.
  
  My college friends are about to graduate from chemistry grad school and head into full-time jobs, while I’m two years into a second degree. It’s easy to compare and doubt.
  
  But here’s what I can say, at the end of my second year in Information Management:
  
  **I’m truly grateful I questioned my old path.  
  I’m even more grateful I had the courage to change it.  
  Because now, I know I’m heading in the right direction.**`,
      zh: `
  ## 誤打誤撞的開始：來自「化學成績特別好」的誤會
  
  我不是從小就立志當軟體工程師的。相反地，我最早的「專長」，是化學。  
  高中的時候，我有一位超強的補習班化學老師 — **徐杰**，他教得超好，把複雜的觀念講得超清楚，因為他的教學，我的化學成績遠遠高於其他科目。
  
  那時的我，天真地把「表現好」誤認為「興趣所在」。就這樣，我毫不懷疑地在學測申請大學的時候填了4個化學系，覺得這是「我擅長的領域」，開始了我在高醫醫化系的旅程。
  
  ---
  
  ## 大學四年：在沒有熱情的路上持續前進
  
  大學四年，我讀完每一門化學課，考完每一張考卷，做完每一份報告，但內心始終有個聲音：  
  **「這真的是我想做一輩子的事嗎？」**
  
  尤其到了大四，身邊的同學們都在準備考研究所、做專題、找實驗室，我卻完全提不起勁。我開始誠實面對自己——我不喜歡化學，也不想再往這條路走下去。  
  
  雖然拿到了學士學位，但我知道自己必須重新開始。
  
  ---
  
  ## 半是現實、半是直覺：踏進資訊領域
  
  說真的，我進入 **資訊管理學系（資管系）** 也是有點誤打誤撞。當時的我，只知道：「軟體工程師的薪水普遍不錯，而且工作型態看起來滿自由的。」
  
  我不知道自己能不能做好，但我知道我學東西學得快，也願意投入。這樣就夠了。
  
  剛開始學程式的時候，其實我根本不太確定自己在做什麼。語法很抽象、debug 超混亂，每天像是進入一個不會說話的國度。  
  但就在第一個學期的期末，我和 Stonk、Iris、Angelica 一起完成了一款名叫 **LakyCarcar** 的小遊戲，那是我第一次真的做出一個可以玩的東西。
  
  **從那一刻起，我發現我真的喜歡這件事。**
  寫程式不再只是課堂作業，而是創作與挑戰，開始變得讓人上癮。
  
  ---
  
  ## 我真的喜歡「開發」這件事
  
  隨著越來越多的接觸，我發現我不只是為了錢來學軟體的。  
  我 **真心喜歡「開發」的過程**：從無到有、把一個模糊的需求變成實際可用的產品，這種「創造感」讓我著迷。
  
  我喜歡解問題、喜歡 debug 解出關鍵、喜歡讓使用者因為我做的功能感到開心——這就是我想要的生活。
  
  ---
  
  ## 這條路，走對了
  
  老實說，我偶爾還是會焦慮。當年大學的朋友現在都要研究所畢業、準備進入職場了，而我好像「重來了一次」。  
  但回頭看看現在的我，在資訊管理學系結束大二的這個時間點，我可以很篤定地告訴自己：

  **還好我曾經懷疑過，也還好我勇敢換了路。  
  現在的我，正在往真正屬於我的方向前進。**`
    },
    category: {
      en: 'Life Exploration',
      zh: '人生探索'
    },
    tags: ['Life'],
    publishedAt: '2025-06-20',
    updatedAt: '2025-06-20',
    featured: true,
  },
  // Paste this into your src/data/notes.ts file

{
    id: 'superbot-dev-log-my-first-api-project',
    title: {
      en: `SuperBot Dev Log: My First API Project`,
      zh: `SuperBot 開發筆記：我的第一個 API 專案`
    },
    description: {
      en: `From scratch to solution—SuperBot was my first API project, built to automate teaching admin tasks with code and a little help from AI.`,
      zh: `從零開始打造 SuperBot，我用程式解決教學現場的麻煩事，也和 AI 一起寫下我人生第一個 API 專案。`
    },
    content: {
      en: `## Why I Built SuperBot
  
  When I launched **Superb Education**, I didn’t expect admin work to be the real beast.  
  Taking attendance, tracking progress, replying to repetitive questions—it all added up and drained my energy fast.
  
  I wanted to free up my time to focus on teaching.  
  So I asked myself: *What if a bot could handle all of this?*
  
  I wasn’t just looking for automation—I was imagining a real assistant.  
  A chatbot that could understand context, respond to students, and update records automatically. That’s how the idea for **SuperBot** began.
  
  ---
  
  ## What Even *Is* an API?
  
  Before SuperBot, I had never built anything with APIs. I vaguely knew APIs existed. But I didn’t know how they worked.
  
  So I jumped in and decided:  
  - Use **LINE Bot** as the front-end  
  - Use **Google Sheets** as a backend database  
  - Use **Python** to glue them together  
  
  Sounds simple, right?  
  Wrong.
  
  ---
  
  ## The LINE Bot Chaos
  
  LINE Bot was pure chaos at first.  
  I spent days trying to get a simple webhook to work. I followed five different tutorials. I triple-checked my access tokens. Still nothing.
  
  The webhook didn’t respond. No error, no reply. Just silence.  
  I thought it was Heroku. I thought it was the endpoint. I thought it was me.
  
  Turns out—I was using the **wrong version** of the LINE API documentation the entire time.
  
  Lesson learned:  
  **Always check the version of the doc, and always read *everything*.**
  
  After that wake-up call, I finally understood what webhooks are, how events trigger, and how to handle and parse JSON properly.
  
  ---
  
  ## Google Sheets as a “Database”
  
  Once LINE was working, I turned to **Google Sheets**.
  
  Using the \`pygsheets\` Python package, I could fetch, update, and write rows dynamically. It felt magical—like I’d unlocked spreadsheet superpowers.
  
  That said, setting up Google credentials, service accounts, and permissions took a lot of trial and error. But once I got through that wall, the rest started to click.
  
  Students could text the bot, and it would instantly write their data into the right row—tracking attendance, calculating missed days, and even sending reminders.
  
  No fancy UI. No backend database. Just one spreadsheet + one bot.
  
  ---
  
  ## Technical Highlights
  
  Here’s what I implemented while building SuperBot:
  
  - **Webhook routing**: Different messages trigger different workflows (attendance, reminders, info lookup).
  - **Google Sheets integration**: Using \`pygsheets\` to dynamically update the sheet based on student ID.
  - **Input handling**: Flexible keyword detection with fallback responses for typos or unexpected inputs.
  - **Cloud deployment**: Simple \`git push heroku main\` workflows for rapid deployment.
  - **Live debugging**: \`heroku logs --tail\` helped me diagnose issues in real time.
  
  This project taught me more in one month than any class I’ve taken.
  
  ---
  
  ## The Final Result: My First Real-World Solution
  
  By the end, SuperBot could:
  
  - Automatically recorded class attendance
  - Matched student group IDs and updated the corresponding rows in Google Sheets
  - Responded to frequently asked questions (e.g., progress and assignment queries)
  - Automatically pushed course-related notifications
  - Calculated total class hours and fees for each month 
  
  But more than that, it became my **first real software solution**.  
  It solved a real problem, saved me hours of time, and made the learning process smoother for students.
  
  ---
  
  ## Grateful for My Co-Pilot: ChatGPT
  
  Through all the errors, API docs, and unexpected bugs—there was one consistent teammate helping me out: **ChatGPT**.
  
  It helped me debug JSON, refactor code, understand obscure API docs, and even walk through flow design logic.
  
  So yes—**SuperBot is Superb Education’s first digital staff member**,  
  and ChatGPT is its secret co-founder 🤝
   
  I bow to AI. I debugged, it answered. I questioned, it delivered. SuperBot? It’s our first joint startup. 🚀🤖`,
      zh: `## 為什麼要開發 SuperBot？
  
  在創辦 **精湛教育** 的初期，我花了大量時間在處理學生的出缺勤紀錄、功課追蹤、進度回報，甚至要一一回覆「老師我幾點要補課」這種訊息。  
  這些事情雖然瑣碎，但如果沒有即時處理，學生的學習品質就會受到影響。但為了及時回覆這類訊息，實在是讓我身心俱疲。
  
  我開始思考：**有沒有可能讓機器人來協助我做這些事？**  
  不是那種冰冷的客服，而是一個能與學生互動、讀懂關鍵字、知道該把資訊送去哪裡的智慧小助手。
  
  這個想法，慢慢演化成了後來的 —— **SuperBot**。
  
  ---
  
  ## API 是什麼？我第一次真正搞懂它
  
  在開發 SuperBot 之前，我其實聽過 API，但從來沒有真的動手用過。
  
  「API 是什麼？」  
  「我只知道很多網站都有 API，但我該怎麼連？會不會很複雜？」
  
  於是我開啟了我人生中第一次真正的「API 專案」。
  
  我決定把 LINE 作為聊天界面，Google Sheets 當作資料庫，兩者中間用 Python 打通。聽起來很合理，對吧？  
  但從第一步開始，我就摔進了大坑。
  
  ---
  
  ## LINE Bot：新手災難現場
  
  **LINE Bot 的設定，真的超級複雜。**
  
  我花了好幾天時間在設定 webhook，部署到 Heroku、設定 Channel Secret、Access Token、URL 驗證、訊息格式轉換……  
  但怎麼樣都沒成功。連個「Hello」都回不出來。
  
  我一開始以為是程式寫錯、網址沒公開、Heroku 配置失敗，全都重來一輪，還是沒用。  
  **直到第七天，我才驚覺——我看的是舊版的 LINE Messaging API 文件！！！**
  
  當場直接在 Notion 寫下一行血淚筆記：  
  **「永遠確認你看的文件版本是不是跟 SDK 一樣。」**
  
  這個錯誤雖然很蠢，但也讓我更扎實地理解 API 的本質。從那天開始，我才真正明白 webhook 是怎麼運作的、怎麼驗證 request、怎麼解 JSON 格式、怎麼處理非同步邏輯。
  
  ---
  
  ## Google Sheets API：把試算表當資料庫
  
  LINE 處理完之後，我開始對接 Google Sheets。
  
  我選擇用 \`pygsheets\` 這個 Python 套件，讓我可以像操作 Excel 一樣去抓資料、寫資料、定位特定的儲存格。  
  一開始卡最久的，就是 Google Cloud Console 的金鑰、OAuth 憑證、服務帳號授權流程。沒設定對，怎麼寫都會報錯。
  
  但搞懂之後，我開始享受這個過程。因為我可以讓學生輸入關鍵字之後，資料自動寫進對應行列，甚至自動記錄打卡時間、計算出缺勤率。
  
  我第一次感受到：「原來我可以不用寫後台、不用建資料庫，只用 Google Sheets 和 LINE Bot，就能打造一個完整的互動系統。」
  
  ---
  
  ## 開發技術細節
  
  以下是我在開發 SuperBot 過程中實作的核心技術：
  
  - **Webhook 處理與事件分流**：不同訊息觸發不同功能（出勤、查詢、提醒）。
  - **Google Sheets 整合**：使用 \`pygsheets\` 串接，依據學生 ID 動態查詢與更新。
  - **訊息容錯處理**：設計簡易的訊息解析邏輯，減少學生輸入錯誤造成系統崩潰。
  - **Heroku 雲端部署**：使用 Git push 自動部署，方便快速更新與測試。
  - **Log 監控與 Debug**：透過 \`heroku logs --tail\` 即時追蹤系統錯誤與用戶輸入。
  
  這些東西我一開始完全不會，但透過每次錯誤、每次撞牆，我慢慢從「我不知道我在幹嘛」，成長成「我知道這段要去哪裡查、這段可以怎麼改」。
  
  ---
  
  ## 最後成果：我與 ChatGPT 的第一個聯合專案
  
  最終，SuperBot 成功實作了以下功能：
  
  - 自動登記課程出缺勤  
  - 對應學生群組 ID 並更新對應資料行
  - 自動回應常見問題（如進度、作業查詢）
  - 自動推送課程訊息  
  - 計算每個月上課時數及費用
  
  這個專案不只是讓我工作更有效率，更重要的是，**它讓我第一次把「程式」轉化成一個真實世界的解決方案。**
  
  ---
  
  ## 真誠感謝：致我最強的無形搭檔——ChatGPT
  
  老實說，這整個開發過程中，最值得感謝的，其實是我的另一位夥伴：**ChatGPT**。  
  從第一次打開 LINE API 的文件開始，到部署到 Heroku、設計資料結構、調整 JSON 解析方式，每一步都有它陪我一起走。
  
  它幫我 debug、幫我解釋錯誤訊息、甚至幫我思考使用者流程設計。  
  **SuperBot 可以說是我和 ChatGPT 一起打造出的「精湛教育第一位數位員工」。**
  
  不請假、不怠惰、準時上工，還永遠記得每個學生的名字——  
  感恩 AI，讚嘆 AI，這不只是開發，是我們與機器人的合作新時代 🛠️🤖`
    },
    category: {
      en: 'Development',
      zh: '開發'
    },
    tags: ['LineBot', 'Development'],
    publishedAt: '2024-12-30',
    updatedAt: '2025-06-20',
    featured: true,
  }
];

export const categories = [
  { en: 'All', zh: '全部' },
  { en: 'Development', zh: '開發' },
  { en: 'Life', zh: '生活' },
  { en: 'Life Exploration', zh: '人生探索' },
]; 