# Tatra Hut Trek

An offline web app for the four-day hut-to-hut trek from Siwa Polana to Murowaniec: trail map with GPS, SOS screen, packing list and shared trip costs. It installs to a phone's home screen and works with no signal.

## What's in this folder

| File | What it does |
| --- | --- |
| `index.html` | The whole app |
| `sw.js` | Keeps the app working offline |
| `manifest.webmanifest` | Lets phones install it with a name and icon |
| `icons/`, `fonts/` | App icon and typeface |

## 1. Put it online (free, about 10 minutes)

1. Create a free account at **github.com**.
2. Click **+** (top right) → **New repository**. Name it `tatra-trek`, leave it **Public**, click **Create repository**.
3. On the empty repository page, click **uploading an existing file**. Drag in everything from this folder (the files *and* the `icons` and `fonts` folders). Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After a minute or two the address appears at the top of that page, for example `https://yourname.github.io/tatra-trek/`. Send that link to the group.

Anyone with the link can open the app, but nobody can see your data. Packing lists and costs are stored only on each phone.

## 2. Get a free map key (for the topographic map)

1. Sign up at **maptiler.com** (free plan, no card needed).
2. In your account, open **API keys** and copy the default key.
3. Recommended: edit the key and add your GitHub Pages address under allowed origins, so nobody else can use it.

The free plan is for non-commercial use and has a monthly request limit. Downloading the whole route uses about 1,500 requests per phone. Check MapTiler's terms for offline use and attribution (the free plan asks for the MapTiler logo to be shown).

## 3. Install on each phone

- **iPhone:** open the link in **Safari** → Share button → **Add to Home Screen**.
- **Android:** open the link in **Chrome** → ⋮ menu → **Install app**.

Always open the app from the home-screen icon. Then, on Wi-Fi:

1. On the Map, tap the **layers** button (two stacked squares).
2. Paste the MapTiler key and tap **Download map for the route** (about 30 MB).
3. Allow location access when asked ("While using the app").

## 4. Test before you go

Turn on **airplane mode**, open the app from the home screen and check that:

- the map and route show,
- the blue location dot appears (GPS works in airplane mode on most phones; on some you may need to turn location back on),
- the **SOS** screen shows your coordinates.

## Good to know

- **Back up your data.** Settings (layers button) → **Save backup** before the trip. The same file can be loaded on another phone with **Restore backup**.
- **Download the map close to the trip.** Phones can clear stored website data for apps you haven't opened in a while. Download a few days before leaving and open the app once the day before.
- **Updating the app.** Change the files on GitHub, then change `VERSION` in `sw.js` (for example to `tatra-app-v2`). Phones pick up the update the next time the app opens with signal.
- **Battery.** GPS tracking uses battery. Carry a power bank.
- **Credits.** Trail network © OpenStreetMap contributors (ODbL). Map images © MapTiler © OpenStreetMap contributors. Barlow typeface under the SIL Open Font License (`fonts/OFL.txt`).

This app is a planning aid. Carry a paper map and check conditions with TOPR or the Tatra National Park before each day.
