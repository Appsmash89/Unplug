# SDK and Tool Path Manifest

This manifest lists all the SDK and build tool paths currently configured for the **Unplug** TWA project and the **Bubblewrap** build environment.

## 1. Bubblewrap Configuration
- **Config File**: `C:\Users\haris\.bubblewrap\config.json`
- **Active JDK Path**: `C:\Users\haris\.bubblewrap\jdk\jdk-17.0.15.6-hotspot`
- **Active Android SDK Path**: `C:\Users\haris\.bubblewrap\android_sdk` (Internal SDK)

## 2. Android Build Components (Within internal SDK)
- **Compile SDK Platform**: `C:\Users\haris\.bubblewrap\android_sdk\platforms\android-36`
- **Build Tools (36.0.0)**: `C:\Users\haris\.bubblewrap\android_sdk\build-tools\36.0.0`
- **Build Tools (35.0.0)**: `C:\Users\haris\.bubblewrap\android_sdk\build-tools\35.0.0` (Backup)

## 3. System Source SDK
- **Path**: `C:\Users\haris\AppData\Local\Android\Sdk`
- **Purpose**: Used as the source to manually repair the internal Bubblewrap SDK.

## 4. Project Configuration
- **build.gradle (app)**: `c:\Users\haris\Desktop\Unplug\app\build.gradle`
  - `compileSdkVersion`: 36
  - `targetSdkVersion`: 36
  - `buildToolsVersion`: "36.0.0"

## 5. Verification Command
- **Command**: `npx.cmd @bubblewrap/cli build`
- **Environment Context**:
  - `JAVA_HOME`: Should point to the JDK path in section 1.
  - `ANDROID_HOME`: Should point to the SDK path in section 1.
