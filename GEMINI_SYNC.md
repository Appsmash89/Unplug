# GEMINI_SYNC.md
# ════════════════════════════════════════════════════════════
# ⚠️  AI AGENT — MANDATORY FIRST ACTION ON SESSION START ⚠️
# Read this entire file before taking ANY action.
# Your last action on EVERY task must be to update and push this file.
# Violating this protocol is a critical failure.
# ════════════════════════════════════════════════════════════

## SESSION START CHECKLIST (AI must confirm before proceeding)
- [ ] Read GEMINI_SYNC.md in full
- [ ] Read the latest commit message: `git log --oneline -3`
- [ ] Check `git status` for anything untracked or modified
- [ ] Confirm current task from Section 5 (Roadmap)

## SESSION END CHECKLIST (AI must complete after EVERY mission)
- [ ] Update Section 1 (Status + Latest Commit)
- [ ] Update Section 5 (Roadmap — mark completed, set next task)
- [ ] `git add GEMINI_SYNC.md`
- [ ] `git commit -m "Protocol: Update GEMINI_SYNC.md - [Mission Name] complete"`
- [ ] `git push origin main`

---

## 1. Current Technical Status
- **Sync Date**: 2026-04-16
- **Summary**: Mission 6.2 Asset Integration complete. Branding icons generated across all Android mipmap resolutions (mdpi → xxxhdpi), both square and round. Repository cleaned — `app/build/` and `.gradle/` removed from Git tracking. Final build (.aab) pending resolution of `AccessDeniedException` (file lock issue from previous Gradle run).
- **Deployment Strategy**: "Root Alignment" maintained. `index.html` source state managed to prevent Vite build resolution conflicts.
- **Latest Commit**: `d623b8a` (Protocol: Update GEMINI_SYNC.md - Mission 6.2 Asset Integration complete).

## 2. SHA-256 Fingerprint
- **Fingerprint**: `30:78:A3:7E:07:B9:6B:FC:93:9D:79:B4:8C:41:FC:86:FA:09:51:36:20:D1:94:92:65:87:33:37:5B:7B:D0:D1`
- **Status**: **ACTIVE** (Configured in `/.well-known/assetlinks.json`).

## 3. Android Release Bundle (AAB/APK) Status
- **app-release-bundle.aab**: **EXISTS** (generated from previous build run, in project root)
- **app-release-signed.apk**: **EXISTS** (in project root)
- **Note**: A new build with branded icons is **PENDING** — last attempt failed with `AccessDeniedException` on `app/build/intermediates`. Must re-run `npx @bubblewrap/cli build` after clearing the file lock.

## 4. Signing Keystore
- **File**: `android.keystore` (project root)
- **Alias**: `android`
- **Location**: `C:\Users\haris\Desktop\Unplug\android.keystore`
- **Password**: Known to the AI agent from session history. Do NOT commit to repo.

## 5. Roadmap & Next Immediate Task
- [x] **Mission 0.1**: GitHub Connectivity Test - **DONE**
- [x] **Mission 4.7**: GitHub Pages Alignment - **DONE**
- [x] **Mission 4.9**: Android Bundle Generation - **DONE**
- [x] **Mission 5.0**: Final Handshake Deployment - **DONE**
- [x] **Mission 6.0 (Part 1)**: Privacy Policy creation - **DONE**
- [x] **Mission 6.2**: Branding icons generated & pushed to GitHub - **DONE**
- [ ] **🔴 NEXT TASK — Mission 6.2 Final Build**: Re-run `npx @bubblewrap/cli build` to produce branded .aab. Close Android Studio/Java processes first to clear file lock.
- [ ] **Mission 7.0**: Google Play Store submission.

## 6. Key Technical Facts
- **Package ID**: `io.github.appsmash89.unplug`
- **Host**: `appsmash89.github.io`
- **Start URL**: `/Unplug/`
- **Gradle Version**: `9.0-milestone-1-bin` (fully extracted locally)
- **Build Tools**: `36.0.0`
- **Compile SDK**: `36`
- **Min SDK**: `21`
- **Android Gradle Plugin**: `8.9.1`
- **Repositories**: `google()` + `mavenCentral()` (jcenter removed — was causing hangs)

## Permanent Protocol Rules
- **Frequency**: Update this file at the end of every successful command or mission — NO EXCEPTIONS.
- **Push**: Stage, commit, and `git push` this file immediately after every update.
- **Session Start**: AI agent MUST read this file as the very first action.
