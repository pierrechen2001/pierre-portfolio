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
  and ChatGPT is its secret co-founder :handshake:
   
  I bow to AI. I debugged, it answered. I questioned, it delivered. SuperBot? It’s our first joint startup. :rocket::bot:`,
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
  感恩 AI，讚嘆 AI，這不只是開發，是我們與機器人的合作新時代 :wrench::bot:`
    },
    category: {
      en: 'Development',
      zh: '開發'
    },
    tags: ['LineBot', 'Development'],
    publishedAt: '2024-12-30',
    updatedAt: '2025-06-20',
    featured: true,
  },

  // Paste this into your src/data/notes.ts file

  {
    id: 'balancing-gai-in-software-engineering-education',
    title: {
      en: `Balancing GAI in Software Engineering: Foundation First, Then AI Acceleration`,
      zh: `軟體工程中的 GAI 平衡：先打基礎，再用 AI 加速`
    },
    description: {
      en: `GAI accelerates software development, but solid foundations remain essential. Exploring how universities should balance AI integration in computer science education.`,
      zh: `GAI 讓軟體開發更快，但紮實基礎仍是必要。探討大學電腦科學教育應如何平衡 AI 融入。`
    },
    content: {
      en: `## The GAI Revolution in Software Engineering

As someone who's spent years teaching mathematics and science in high schools, and now diving deep into software engineering, I've seen firsthand how technology changes the way we learn and work. Generative AI tools like GitHub Copilot, ChatGPT, and Claude have truly transformed software development—they've made what used to take hours now possible in minutes, and they've opened doors for people who might not have dared to start coding before.

But let me be honest with you: **GAI is a fantastic accelerator, but it can never replace that solid foundation we build through hard work and understanding.**

---

## Foundation Before Acceleration: Why CS Fundamentals Still Matter So Much

After years of teaching teenagers the basics of math and science, I can tell you this with complete confidence—**solid programming fundamentals are absolutely essential**. Understanding data structures, algorithms, memory management, and computational complexity isn't just academic theory. These are the building blocks that let developers truly excel.

Let me share what I've learned from both sides of the classroom:

1. **Writing efficient code**: Sure, GAI can spit out code, but only someone who understands Big O notation can spot when that code will crumble under real-world pressure.

2. **Debugging with wisdom**: AI might suggest fixes, but without knowing how programs actually flow and manage state, you can't tell if those suggestions are real solutions or just band-aids.

3. **Designing systems that last**: Big software projects need architectural thinking that goes way beyond single functions—understanding distributed systems, concurrency, and fault tolerance is what separates the amateurs from the pros.

4. **Asking the right questions**: GAI shines when you know exactly what to ask. Without fundamentals, you're just guessing in the dark.

**Think of GAI as rocket fuel—it'll propel you forward, but only after you've built yourself a solid engine.**

---

## The Educational Dilemma: When Universities Say "No AI"

This brings me to something that's been bothering me lately: **some university computer science courses are outright banning AI tools**. As someone who values both the traditional rigor of computer science and the practical realities of modern development, this policy genuinely puzzles me.

I get why they're doing it—wanting students to think independently, preventing cheating, keeping academic standards high. But **completely banning AI in 2025 feels like teaching kids to drive while telling them they can't use the engine**.

Picture this: A student spends 3 frustrating hours wrestling with a complex sorting algorithm. With some GAI help, they could finish in 30 minutes and use those extra 2.5 hours to really dig into optimizations, edge cases, and how this applies to real software.

**Education should be about learning to solve problems effectively, not proving you can suffer through them the hard way.**

---

## A Balanced Approach: Teaching GAI the Right Way

From my experience as an educator, here's how I think universities should handle this:

### Phase 1: Building Strong Foundations (Freshman/Sophomore Years)
- **AI as your study buddy**: Use AI to explain concepts and give examples when you're stuck
- **Hands-on practice required**: Core algorithms and data structures? You implement them yourself
- **Focus on the "why"**: Understanding the reasoning behind solutions, not just memorizing answers

### Phase 2: Applying What You've Learned (Junior/Senior Years)
- **GAI as a development partner**: Learn to use AI for rapid prototyping and problem-solving
- **Code review and improvement**: Always check and optimize what AI generates
- **Responsible AI practices**: Discuss ethics, spot biases, and understand limitations

### Phase 3: Preparing for the Real World
- **Industry-ready skills**: Master prompt engineering, AI-assisted debugging, and modern workflows
- **Keep learning**: AI tools change fast—adaptability is your best friend

---

## Looking Forward: AI as Our Innovation Partner

Despite the challenges, I'm genuinely excited about GAI's potential. When used thoughtfully, it can help developers in amazing ways:

- **Make programming accessible**: Lower the barriers so more people can start creating
- **Free us for bigger challenges**: Stop wasting time on repetitive code and focus on solving meaningful problems
- **Speed up innovation**: Quick prototyping means faster testing and improvement cycles

**With AI's help, we can build better software faster, create solutions that truly matter, and use technology to make people's lives better.**

The key is balance: respect the foundations that have made computer science strong for decades, while embracing the tools that will shape the next chapter.

---

## A Note to My Fellow Educators and Students

To all the computer science students and teachers out there: **GAI isn't here to replace us—it's here to make us stronger.** The developers who really succeed will be those who master both the fundamental principles of computer science and the smart use of AI tools.

The future belongs to those who can harness AI's power while keeping that critical thinking and problem-solving spirit alive. Let's work together to build that future—it's going to be an exciting journey!`,
      zh: `## 軟體工程中的 GAI 革命

身為一位在中學教了多年數學和理科的老師，現在又投入軟體工程的世界，我親眼見證了科技如何改變我們學習和工作的方式。GitHub Copilot、ChatGPT、Claude 這些生成式 AI 工具真的徹底改變了軟體開發——它們讓過去需要花上好幾個小時的事，現在幾分鐘就能搞定，還為那些原本不敢碰程式的人開啟了大門。

但讓我老實說：**GAI 雖然是個很棒的加速器，但它永遠無法取代我們用努力和理解建立的紮實基礎。**

---

## 先打基礎，再加速：為什麼 CS 基礎還是那麼重要

在高中教了那麼多年書，教學生基本的數學和科學概念後，我可以很篤定地告訴大家——**紮實的程式基礎真的是絕對必要的**。理解資料結構、演算法、記憶體管理以及計算複雜度，不只是書本上的理論，這些是讓開發者真正出類拔萃的基石。

讓我分享一下我在教室兩邊學到的心得：

1. **寫出高效能的程式碼**：AI 確實可以吐出一堆程式碼，但只有懂 Big O 表示法的人，才能看出那個程式碼在實際壓力下會不會崩潰。

2. **智慧地 debug**：AI 可能會建議修復方案，但如果你不懂程式怎麼流動、怎麼管理狀態，你就無法判斷那些建議是真的解決了問題，還是只是在貼創可貼。

3. **設計經得起考驗的系統**：大型軟體專案需要超越單一函式的架構思考——理解分散式系統、並發處理和容錯機制，這才是把業餘和專業區分開來的關鍵。

4. **提出正確的問題**：GAI 在你知道該問什麼的時候最厲害。沒有基礎，你就只能在黑暗中摸索。

**把 GAI 想成火箭燃料吧——它會推你往前飛，但前提是你得先造好一台堅固的引擎。**

---

## 教育的困境：大學說「不能用 AI」的時候

這讓我想起最近讓我很困擾的一件事：**有些大學的電腦科學課程居然明文禁止使用 AI 工具**。身為一個既重視傳統電腦科學的嚴謹，又了解現代開發實務的人，這項政策真的讓我百思不得其解。

我懂他們為什麼這麼做——希望學生獨立思考、防止作弊、維持學術標準。但 **2025 年了還要完全禁止 AI，就像是教學生開車卻不讓他們用引擎一樣**。

想像一下：一個學生花了 3 個小時痛苦地和複雜的排序演算法搏鬥。如果有 GAI 幫忙，他們 30 分鐘就能完成，然後把剩餘的 2.5 小時用來深入研究優化、邊界狀況，以及這些東西在真實軟體中的應用。

**教育的目標應該是教會學生有效解決問題，而不是證明他們能硬撐著受苦。**

---

## 平衡之道：用對的方法教 GAI

以我當教育工作者的經驗來說，我覺得大學應該這樣處理這件事：

### 第一階段：打好根基（大一/大二）
- **AI 當你的學習幫手**：卡關時用 AI 解釋觀念、給例子
- **親手實作不能少**：核心演算法和資料結構？一定要自己動手寫
- **重點在「為什麼」**：理解背後的道理，而不只是死記答案

### 第二階段：活用所學（大三/大四）
- **AI 變成開發夥伴**：學會用 AI 做快速原型和問題解決
- **程式碼要檢查優化**：AI 生出來的東西一定要檢視和改進
- **負責任用 AI**：討論倫理、找出偏見、了解限制

### 第三階段：準備進入職場
- **職場必備技能**：掌握提示工程、AI 輔助除錯、現代工作流程
- **持續學習很重要**：AI 工具變化快，適應力就是你的好朋友

---

## 展望未來：AI 成為我們的創新伙伴

儘管有這些挑戰，我對 GAI 的潛力還是很樂觀。當謹慎使用的時候，它能以很棒的方式幫助開發者：

- **讓程式設計更容易上手**：降低門檻，讓更多人開始創造
- **解放我們處理大事**：別再浪費時間在重複的程式碼上，專心解決有意義的問題
- **加速創新腳步**：快速原型意味著更快測試和改進

**有了 AI 的幫助，我們能更快做出更好的軟體，創造真正有影響力的解決方案，用科技讓大家的生活更好。**

重點在於平衡：尊重讓電腦科學堅強了數十年的基礎，同時擁抱將塑造下一個時代的工具。

---

## 給同行和學生的話

給所有電腦科學的學生和老師們：**GAI 不是來取代我們，而是來讓我們更強大。** 真正成功的開發者，將是那些既精通電腦科學的基本原理，又懂得聰明運用 AI 工具的人。

未來屬於那些能駕馭 AI 力量，同時保有批判思考和問題解決精神的人。讓我們一起努力，這個旅程會很精彩！`
    },
    category: {
      en: 'Technology & Education',
      zh: '科技與教育'
    },
    tags: ['GAI', 'Education', 'Software Engineering', 'AI'],
    publishedAt: '2025-11-11',
    updatedAt: '2025-11-11',
    featured: true,
  },
  
  {
    id: 'ai-transformation-human-centric',
    title: {
      en: `AI Transformation in Industries: Returning to Human-Centric Values`,
      zh: `各行業的 AI 轉型觀察：技術爆發後，終究要回歸人本`
    },
    description: {
      en: `Reflecting on the AI explosion of the past four years: while the demand for LLMs is soaring across industries, the key is not just automation, but how to highlight human value in an AI-integrated world.`,
      zh: `回顧 GAI 爆發的這四年，各行各業需求激增。這一年半來身為開發者的觀察：重點不在於 AI 有多強大，而在於我們該如何在 AI 大規模融入世界的時代，彰顯身為「人」的價值。`
    },
    content: {
      en: `## The Era of AI Integration: A Developer's Perspective

It has been nearly four years since the Generative AI explosion began. For the past year and a half, as a developer, I have witnessed and heard an overwhelming number of requests and needs from various industries.

From education to finance, from healthcare to creative industries, everyone is asking the same question:
**"How can we integrate AI?"**

I've seen companies rushing to build "AI features" just to say they have them. I've seen startups pivoting entirely to wrap around OpenAI's APIs. The demand for Large Language Models (LLMs) is massive, and it feels like a gold rush.

But as the dust settles, a pattern is emerging.

---

## The Trap of "AI for AI's Sake"

In the beginning, many projects focused purely on **capability**:
*"Look! It can generate images!"*
*"Look! It can summarize a PDF!"*

While impressive, these are just features, not products.
I've seen many "AI Transformation" projects fail because they started with the technology, not the user.

While AI possesses powerful reasoning and information processing capabilities, humans still possess qualities that AI lacks.

For example, imagine a world where all customer service is handled by AI bots. Even if they are 100% accurate and instant, what is lost?
The warmth of a conversation? The feeling of being truly heard? The subtle nuance of empathy that turns a frustrated customer into a loyal one?

The industry is realizing that **accuracy, reliability, and empathy** matter more than just raw generation speed.

We constantly demand that Large Language Models behave more like humans—like real, authentic people.
Why? Because deep down, we know that **a human connection holds far more attraction and persuasion than a machine ever could.**

---

## Highlighting Human Value in an AI World

The most successful AI implementations I've seen recently share one common trait: **They put humans back in the center.**

They don't try to replace the expert; they try to amplify them.
- In **Education**, AI doesn't replace teachers. It handles grading and practice generation, allowing teachers to focus on mentorship and emotional support.
- In **Healthcare**, AI scans data to flag anomalies, giving doctors more time to talk to patients and make complex judgments.
- In **Coding**, AI handles the boilerplate, letting us focus on system architecture and solving complex logic problems.

**I believe AI will soon be integrated into our world on a massive scale.**
The question we must face is not "Will AI replace us?", but rather:
**"How do we highlight our unique value as humans in this upcoming era?"**

The value isn't in the automation itself. The value is in freeing up human time for things only humans can do—connection, creativity, and complex ethical judgment.

---

## What "Transformation" Really Means

True digital transformation with AI isn't about firing staff and buying GPU credits. It's about **reimagining workflows**.

It's about asking:
"If our team didn't have to spend 80% of their time on X, what could they create?"

We are moving from a phase of "Tech Demo" to "Value Creation."
The question has shifted from *"What can this model do?"* to *"How does this actually help a human being live or work better?"*

As developers, our job is no longer just "connecting APIs." It's about designing interactions that feel natural, trustworthy, and helpful.

---

## Conclusion

The AI hype might cool down, but the integration of AI into our daily lives is just beginning.
Ultimately, technology is a tool. The goal is to serve people.

In this era of rapid change, the companies and products that win won't be the ones with the flashiest models. They will be the ones that understand human nature best.`,
      zh: `## AI 融入世界的時代：開發者的第一線觀察

距離生成式 AI（GAI）爆發已經快要四年了。這一年半來，身為一名開發者，我親身看見也聽見了來自各行各業大量且迫切的需求。

從教育到金融，從醫療到創意產業，每個人都在問同一個問題：
**「我們要怎麼導入 AI？」**

我看過公司為了說自己有 AI 而硬做「AI 功能」；看過新創團隊整個轉向，只為了包裝 OpenAI 的 API。對大型語言模型（LLMs）的需求是巨大的，這感覺就像是一場淘金熱。

但隨著塵埃落定，一個模式正在浮現。

---

## 「為了 AI 而 AI」的陷阱

一開始，很多專案純粹專注在**能力**上：
*「看！它可以做圖！」*
*「看！它可以總結 PDF！」*

雖然令人印象深刻，但這些只是「功能」，不是「產品」。
我看過很多「AI 轉型」專案失敗，因為他們是從技術出發，而不是從使用者出發。

固然，語言模型的思維與訊息搜集處理能力極為強大，但**人始終具備著 AI 沒有的東西**。

試想一下，當所有的客服都變成了 AI 機器人，縱使準確率極高又即時，會造成什麼影響？
少了對話的溫度、少了「被真正傾聽」的感覺，也少了那份能將憤怒客戶轉變為忠實支持者的微妙同理心。

業界開始意識到，**準確性、可靠性與同理心**，比單純的生成速度更重要。

我們不斷地要求語言模型像個人，像個真實的人。
那是因為我們深知：**比起冰冷的機器，人類始終擁有更強大的吸引力與說服力。**

---

## 在 AI 時代彰顯人的價值

最近我看到最成功的 AI 導入案例，都有一個共同點：**它們把「人」放回了中心。**

它們不試圖取代專家，而是試圖增強專家。
- 在 **教育領域**，AI 不是要取代老師。它處理重複的改考卷和生成個人化練習，讓老師能專注在引導與情感支持。
- 在 **醫療領域**，AI 不是要取代醫生。它掃描數據標記異常，讓醫生有更多時間與病患對話並做出複雜判斷。
- 在 **程式開發**，AI 不是要取代工程師。它處理那些 boilerplate code，讓我們專注在系統架構和解決複雜邏輯問題。

**我相信 AI 很快就會大規模地融入這個世界。**
我們該考慮的不是「會不會被取代」，而是：
**「在接下來的時代，我們該怎麼更彰顯作為『人』的價值？」**

價值不在於自動化本身。價值在於釋放出人類的時間，去做只有人類能做的事——建立連結、發揮創意，以及做出複雜的倫理判斷。

---

## 「轉型」的真正意義

真正的 AI 數位轉型，不是裁員然後買 GPU 算力。而是 **重新想像工作流程**。

是去問：
「如果我們的團隊不需要花 80% 的時間在 X 事情上，他們可以創造什麼？」

我們正在從「技術展示（Tech Demo）」階段移動到「價值創造（Value Creation）」階段。
問題已經從 *「這個模型能做什麼？」* 轉變為 *「這實際上如何幫助一個人生活或工作得更好？」*

作為開發者，我們的工作不再只是「串接 API」。而是設計出感覺自然、值得信賴且真正有幫助的互動體驗。

---

## 結語

AI 的炒作可能會冷卻，但 AI 融入我們日常生活的進程才剛開始。
歸根結柢，科技是工具。目標是服務人類。

在這個快速變遷的時代，最終勝出的公司與產品，不會是那些擁有最炫模型的，而是那些最了解人性的。`
    },
    category: {
      en: 'Technology & Humanity',
      zh: '科技與人文'
    },
    tags: ['AI', 'Industry Analysis', 'Digital Transformation', 'AI 轉型', 'Human-Centric'],
    publishedAt: '2025-11-26',
    updatedAt: '2025-11-26',
    featured: true,
  },
  {
    id: 'as-code-gets-easier-looking-beyond-tech',
    title: {
      en: `As Code Gets Easier, I Find Myself Looking Beyond Tech`,
      zh: `當 Code 變得容易，我開始往科技之外看`
    },
    description: {
      en: `My journey into programming overlapped with the rise of generative AI. As implementation gets cheaper, I'm starting to believe that what sets builders apart may come from outside technology.`,
      zh: `我學程式的過程，剛好和生成式 AI 的發展重疊，一路看著「寫程式」變簡單。當實作變得便宜，真正拉開差距的，可能是我們能從科技之外帶進來什麼。`
    },
    content: {
      en: `## I Happened to Learn Programming at a Strange Time

The timing of when I started learning software development was unusually interesting.

I began taking programming seriously just as generative AI was starting to grow rapidly. So I still experienced what it felt like to build software almost entirely from scratch.

My first time using Flutter, connecting an API, designing a database, or deploying a service usually meant reading documentation, searching through old forum posts, and fixing errors one by one. Sometimes a tiny bug could take half a day.

I remember what it felt like when simply **making something work** was already difficult.

But my learning journey also happened to overlap with the rise of generative AI.

At first, I used AI to explain error messages. Then I started using it to understand unfamiliar frameworks, compare technical approaches, and learn concepts more quickly. Today, I can describe an idea and get surprisingly close to a working prototype in a very short amount of time.

**In a way, I have been watching programming become easier while I was still learning how to program.**

That makes this change feel very personal to me.

I used to assume that becoming a better builder mainly meant learning another framework, another language, or another layer of system design.

I am no longer sure that is enough.

---

## What Happens When More People Can Build?

AI does not make technical knowledge irrelevant.

I still believe fundamentals matter. Without understanding how systems work, it is difficult to know when an AI-generated answer is wrong, and even harder to build something genuinely complex.

But something else is happening at the same time:

**Implementation is becoming cheaper.**

In the past, someone could have a great idea but never turn it into anything because they did not know how to code. That distance is shrinking very quickly.

And it makes me wonder:

> If being able to build something becomes less rare, what becomes more important?

I do not think I have a complete answer yet.

But increasingly, I think part of the answer exists **outside technology**.

---

## What Do You Have to Bring Into Technology?

I used to spend most of my learning time on things directly related to software.

Recently, I have found myself exploring subjects that I would not have considered "useful" for an engineer before: classical music, forest therapy, psychology, space, human perception and experience.

None of these things make me write code faster.

But they make me ask different questions.

When I learned about forest therapy, for example, I started wondering whether parts of a restorative natural experience could be recreated through VR, spatial audio, or other interactive technologies.

A real forest contains many things that a digital environment cannot reproduce. But that is not actually the part I find most interesting.

The interesting part is this: if I had never learned anything about forest therapy, **that question would probably never have entered my mind in the first place.**

Technology gives me a way to build something.

**But what I decide to build often comes from somewhere outside technology.**

I have only recently started appreciating that distinction.

---

## The Humanities Are Not Decoration for Technology

I used to find phrases like "technology and the humanities" a little abstract. They sounded like something people added to the final slide of a technology conference.

Now I think I understand them differently.

If you are technically strong, you can become very good at answering:

**How do we build this?**

But many of the questions that come before that are not technical at all:

- Why does someone need this?
- What makes an experience meaningful?
- Why do people trust one interface and ignore another?
- What makes someone feel calmer, more connected, understood, or motivated to change their behavior?
- Is a product actually solving a problem, or are we simply adding another feature?

Computer science alone cannot answer these questions. They sit somewhere between psychology, design, education, art, culture, and ordinary human experience.

I used to think "human-centered" meant making sure technology ultimately serves human needs. I still believe that.

But now I think human-centered thinking starts earlier than that.

It is not:

> We have this technology. How can we make it work better for people?

It is closer to:

> **We understand something about people. Is there a place where technology can help?**

---

## I Do Not Want to Become Only Better at Writing Code

This is probably the biggest change in how I think about learning right now.

I still want to become technically better. I still care about database design, distributed systems, agent architectures, and good software engineering. I can still get genuinely excited by an elegant system design.

But I no longer want to spend all of my time becoming only "better at writing code."

If AI continues moving in its current direction, I suspect the difference between people will not simply be who can implement something the fastest. It may also depend on:

- What you understand.
- What you care about.
- What you pay attention to.
- How much of the world you have actually explored.

And when you are given a tool that can turn ideas into reality much more easily than before, **whether you have anything worth turning into reality at all.**

That is why I have started spending time listening to music I would not have listened to before, learning about fields far away from computer science, and paying more attention to things that seem unrelated to software.

Not because I want to move away from technology.

Actually, it is the opposite. I still want to build technology.

I just hope that what I build in the future exists for a reason beyond the fact that **I know how to build it.**`,
      zh: `## 我剛好經歷了這個轉變

我開始認真學寫程式的時間，其實滿巧的。

那時候生成式 AI 才剛開始快速發展，所以我算是剛好踩在一個很特別的時間點上。

我有經歷過那種真的從零開始寫一個軟體的過程。第一次碰 Flutter、第一次接 API、第一次處理資料庫、第一次部署服務，很多東西都是一個錯誤一個錯誤慢慢查出來的。有時候只是一個很小的 bug，也可以卡上半天。

所以我知道，在沒有 AI 幫忙的時候，**「把東西做出來」本身其實就有很高的門檻。**

但我的學習過程，又剛好跟生成式 AI 的發展重疊。

從一開始用它解釋錯誤訊息，到後來幫我理解陌生的框架、比較不同技術方案，再到現在，我已經可以用 AI 很快速地把一個想法變成 prototype。

**我幾乎是一路看著「寫程式」這件事情變簡單的。**

也因為這樣，我對這個變化特別有感。

以前我很容易覺得，只要再多學一個 framework、多熟一個 language、多懂一些 system design，我就會成為一個更好的 builder。

現在我開始覺得，事情可能沒有這麼單純。

---

## 如果大家都更容易把東西做出來呢？

AI 並沒有讓技術變得不重要。

相反地，我還是覺得基礎知識很重要。沒有理解系統怎麼運作，就很難知道 AI 給你的答案到底對不對，也很難真的把複雜的東西做好。

可是另一件事情也正在發生：

**implementation 本身正在變得越來越便宜。**

以前一個人可能有很多想法，但因為不會寫程式，所以永遠停在想法。現在這個距離正在快速縮短。

於是我最近常常在想：

> 如果未來「做得出來」不再是一件那麼稀有的能力，那真正重要的會是什麼？

我目前沒有一個非常確定的答案。

但我越來越覺得，其中一部分答案，可能反而存在**科技之外**。

---

## 我開始覺得，「有沒有東西可以帶進科技裡」很重要

以前的我會很自然地把時間全部拿去學跟軟體直接相關的東西。

但最近，我開始接觸一些以前幾乎不會主動碰的領域：古典音樂、森林療癒，或者一些關於心理、空間、感受和人的研究。

很有趣的是，這些東西並沒有讓我的 code 寫得更快。

但它們會讓我開始想到不同的問題。

例如我在了解森林療癒的時候，就會想到：如果人的放鬆感來自自然景觀、聲音、空間感，以及人在那個環境裡注意力的改變，那其中有哪些部分可以透過 VR、spatial audio 或其他互動科技重新創造？

當然，真正的森林有很多東西是數位環境複製不了的。但我覺得真正有趣的其實不是「VR 能不能模擬森林」。

而是，**如果我從來沒有接觸過森林療癒，我大概根本不會想到這個問題。**

科技只是讓我有能力去做。

**但要做什麼，往往來自科技以外的東西。**

這個差別是我最近才越來越有感覺的。

---

## 人文不是科技的裝飾

以前我聽到「科技與人文」這類說法，其實常常會覺得有一點抽象，甚至有點像每場科技論壇最後都一定要補上一句的話。

但現在我反而開始理解它真正的意思。

如果你只懂技術，你可能很擅長回答：

**這個東西要怎麼做？**

但很多更前面的問題其實不是技術問題：

- 人為什麼需要它？
- 什麼樣的體驗會讓人願意留下來？
- 什麼事情真的會讓一個人感到快樂、安心、被理解，或者願意改變自己的行為？
- 一個產品到底是在解決問題，還是只是在增加另一個功能？

這些問題沒有辦法只靠 Computer Science 回答。它們跟心理學、設計、教育、藝術、文化，甚至一個人自己怎麼生活都有關係。

我以前把 human-centered 理解成「科技最後要回到人的需求」。

現在我覺得它可能更前面：

> 不是先有技術，再問怎麼讓它更適合人。
>
> **而是一開始就從人出發，再去想科技可以介入哪裡。**

---

## 我不想只變成一個更會寫 Code 的人

這大概是我最近對自己的學習方向最大的改變。

我當然還是想把技術學好。我還是會想知道 database 怎麼設計、distributed system 怎麼運作、agent 怎麼調度工具，也還是會因為一個漂亮的 architecture 覺得很開心。

但我現在不太想把所有時間都用來變成一個「更會寫 Code 的人」。

因為如果 AI 真的繼續往現在這個方向發展，我覺得未來真正拉開差距的，可能不只是誰寫得最快。而是：

- 你到底理解什麼。
- 你關心什麼。
- 你平常在看什麼。
- 你對人有多少觀察。

以及當你拿到一個幾乎可以快速實現任何想法的工具時，**你腦中到底有沒有值得被實現的東西。**

這也是為什麼我最近反而會想去聽一些以前不會聽的音樂、接觸不同的領域，甚至去理解一些看起來跟資工完全沒有關係的事情。

不是因為我不想做科技了。反而是因為我還想繼續做科技。

只是我希望未來做出來的東西，不只是因為「我會做」。

**而是真的有一些東西，是我想透過科技帶進這個世界裡的。**`
    },
    category: {
      en: 'Technology & Humanity',
      zh: '科技與人文'
    },
    tags: ['AI', 'Human-Centered', 'Career', 'Reflection', '科技與人文'],
    publishedAt: '2026-10-05',
    updatedAt: '2026-10-05',
    featured: true,
  }
];

export const categories = [
  { en: 'Development', zh: '開發' },
  { en: 'Life', zh: '生活' },
  { en: 'Life Exploration', zh: '人生探索' },
  { en: 'Technology & Education', zh: '科技與教育' },
  { en: 'Technology & Humanity', zh: '科技與人文' },
]; 