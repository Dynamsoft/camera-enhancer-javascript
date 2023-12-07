# Dynamsoft Camera Enhancer for Your Website

Allow your website to easily control cameras on desktop and mobile devices.

Once integrated, your users can open your website in a browser, access their cameras to stream live video and acquire realtime frames.

> **Example Usage**
>
> See how Dynamsoft Camera Enhancer helps in camera control and video recognition:
>
> - **Barcode scanning from video stream**: check [Dynamsoft Barcode Reader JS User Guide](https://www.dynamsoft.com/barcode-reader/docs/web/programming/javascript/user-guide/?ver=latest)
> - **MRZ scanning and OCR from video stream**: check [Dynamsoft Label Recognizer JS User Guide](https://www.dynamsoft.com/label-recognition/programming/javascript/user-guide.html?ver=latest&utm_source=dceguide)

In this guide, you will learn step by step on how to integrate the Dynamsoft Camera Enhancer SDK into your website.

- [Getting Started](#getting-started)
  - [Include the SDK](#include-the-sdk)
  - [Interact with the SDK](#interact-with-the-sdk)
- [Hosting the SDK](#hosting-the-sdk)
  - [Step One: Deploy the dist folder](#step-one-deploy-the-dist-folder)
  - [Step Two: Configure the Server](#step-two-configure-the-server)
  - [Step Three: Include the SDK from the server](#step-three-include-the-sdk-from-the-server)
- [FAQ](#faq)
  - [Can I open the web page directly from the hard drive?](#can-i-open-the-web-page-directly-from-the-hard-drive)
  - [Why can't I use my camera?](#why-cant-i-use-my-camera)
- [API Documentation](#api-documentation)
- [Release Notes](#release-notes)
- [Next Steps](#next-steps)

## Getting Started

### Include the SDK

#### Use a CDN

The simplest way to include the SDK is to use either the [jsDelivr](https://jsdelivr.com/) or [UNPKG](https://unpkg.com/) CDN.

- jsDelivr

  ```html
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer@3/dist/dce.js"></script>
  ```

- UNPKG  

  ```html
  <script src="https://unpkg.com/dynamsoft-camera-enhancer@3/dist/dce.js"></script>
  ```

> In some rare cases, you might not be able to access the CDN. If this happens, you can use [https://download2.dynamsoft.com/dce/dynamsoft-camera-enhancer-js/dynamsoft-camera-enhancer-js-3.3.9/dist/dce.js](https://download2.dynamsoft.com/dce/dynamsoft-camera-enhancer-js/dynamsoft-camera-enhancer-js-3.3.9/dist/dce.js)

#### Host the SDK yourself

Besides using the CDN, you can also download the SDK and host it locally.

The following shows a few ways to download the SDK.

- From the website

  [Download the JavaScript Package](https://www.dynamsoft.com/camera-enhancer/downloads/1000021-confirmation/?utm_source=github)

- yarn

  ```cmd
  yarn add dynamsoft-camera-enhancer@3
  ```

- npm

  ```cmd
  npm install dynamsoft-camera-enhancer@3 --save
  ```

Depending on how you downloaded the SDK and where you put it. You can typically include it like this:

```html
<script src="/dynamsoft-camera-enhancer-js-3.3.9/dist/dce.js"></script>
```

or

```html
<script src="/node_modules/dynamsoft-camera-enhancer/dist/dce.js"></script>
```

or

```typescript
import { CameraEnhancer } from 'dynamsoft-camera-enhancer';
```

Read more on [how to host the SDK](#hosting-the-sdk).

### Interact with the SDK

#### Create a `CameraEnhancer` object

To use the SDK, we need to create a `CameraEnhancer` object first.

```javascript
let enhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance();
```

#### Configure the `CameraEnhancer` object

As shown in the code snippet below, before opening the video stream, we need to decide where to place the UI. By default, a full-page-size UI element will be created over the current page.

```html
<!-- Define an element to hold the UI element -->
<div id="enhancerUIContainer" style="width:100%;height:500px;"></div>
<script>
  (async () => {
      let enhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance();
      await enhancer.setUIElement(Dynamsoft.DCE.CameraEnhancer.defaultUIElementURL);
      document.getElementById("enhancerUIContainer").appendChild(enhancer.getUIElement());
      await enhancer.open();
  })();
</script>
```

#### Customize the UI

The built-in UI of the `CameraEnhancer` object is defined in the file `dist/dce.ui.html` . There are a few ways to customize it:

- Modify the file `dist/dce.ui.html` directly.

  This option is only possible when you host this file on your own web server instead of using a CDN.

- Copy the file `dist/dce.ui.html` to your project, modify it and use the the API `defaultUIElementURL` to set it as the default UI.

```javascript
// To make sure the following line takes effect, put it before the API `open()` is called.
Dynamsoft.DCE.CameraEnhancer.defaultUIElementURL = "THE-URL-TO-THE-FILE";
```

- Append the default UI element to your page as shown in [Configure the CameraEnhancer object](#configure-the-cameraenhancer-object), customize it if necessary.

```html
<!-- Define an element to hold the UI element -->
<div id="enhancerUIContainer" style="width:100%;height:500px;"></div>
<script>
  (async () => {
    let enhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance();
    //  Sets the internally built UI element
    await enhancer.setUIElement(Dynamsoft.DCE.CameraEnhancer.defaultUIElementURL);
    // Gets the internally built UI element and add it to the page.
    document.getElementById("enhancerUIContainer").appendChild(enhancer.getUIElement());
    await enhancer.open();
    // The following line hides the close button
    document.getElementsByClassName("dce-btn-close")[0].style.display = "none";
  })();
</script>
```

- Build the UI element into your own web page and specify it with the API `setUIElement(HTMLElement)`.

  - Embed only the video

  ```html
  <div id="enhancerUIContainer" style="width:100%;height:100%;">
      <div class="dce-video-container" style="position:relative;width:100%;height:500px;"></div>
  </div>
  <script>
      (async () => {
          let enhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance();
          await enhancer.setUIElement(document.getElementById("enhancerUIContainer"));
          await enhancer.open();
      })();
  </script>
  ```

  > The video element will be created and appended to the DIV element with the class `dce-video-container`, make sure the class name is the same. Besides, the CSS property `position` of the DIV element must be either `relative`, `absolute`, `fixed`, or `sticky`.

  - Add the camera list and resolution list. If the class names for these lists match the default ones,  `dce-sel-camera` and `dce-sel-resolution` , the SDK will automatically populate the lists and handle the camera/resolution switching.

  ```html
  <select class="dce-sel-camera"></select>
  ```

  ```html
  <select class="dce-sel-resolution"></select>
  ```

  > By default, only 3 hard-coded resolutions (1920 x 1080, 1280 x 720, 640 x 480), are populated as options. You can show a customized set of options by hardcoding them.

  ```html
  <select class="dce-sel-resolution">
      <option class="dce-opt-gotResolution" value="got"></option>
      <option data-width="1280" data-height="720">ask 1280x720</option>
      <option data-width="1920" data-height="1080">ask 1920x1080</option>
  </select>
  ```

  > Generally, you need to provide a resolution that the camera supports. However, in case a camera does not support the specified resolution, it usually uses the closest supported resolution. As a result, the selected resolution may not be the actual resolution. In this case, add an option with the class name `dce-opt-gotResolution` (as shown above) and the SDK will then use it to show the **actual resolution**.

## Hosting the SDK

### Step One: Deploy the dist folder

Once you have downloaded the SDK, you can locate the "dist" directory and copy it to your project (usually as part of your website / web application). The following shows some of the files in this directory:

- `dce.js` // The main SDK file
- `dce.mjs` // For using the SDK as a module (`<script type="module">`)
- `dce.ui.html` // Defines the default enhancer UI

### Step Two: Configure the Server

- Enable HTTPS

  To use the SDK, you must access your website / web application via a secure HTTPS connection. This is due to browser security restrictions which only grant camera video streaming access to a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).

  > For convenience, self-signed certificates are allowed during development and testing. Or use "http://localhost".

### Step Three: Include the SDK from the server

Now that the SDK is hosted on your server, you can include it accordingly.

```html
<script src="https://www.yourwebsite.com/PATH-TO-THE-SDK/dynamsoft-camera-enhancer/dist/dce.js"></script>
```

## FAQ

### Can I open the web page directly from the hard drive?

Yes, for simple testing purposes, it's ok to open the file directly from the hard drive (`file://`). However, you might encounter some issues in doing so (like unable to access the camera, etc.). The recommendation is to deploy this page to your web server and run it over **HTTPS** or use "http://localhost" during development.

If you don't have a ready-to-use web server but have a package manager like *npm* or *yarn*, you can set up a simple HTTP server in minutes. Check out [`http-server` on npm](https://www.npmjs.com/package/http-server) or [yarn](https://yarnpkg.com/package/http-server).

### Why can't I use my camera?

If you open the web page as `http://` , the camera may not work and you see the following error in the browser console:

> [Deprecation] getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See [https://goo.gl/rStTGz](https://goo.gl/rStTGz) for more details.

- In Safari 12 the equivalent error is:

> Trying to call getUserMedia from an insecure document.

You get this error because the API [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) requires HTTPS to access the camera.

To make sure your web application can access the camera, please configure your web server to support HTTPS. The following links may help.

- NGINX: [Configuring HTTPS servers](https://nginx.org/en/docs/http/configuring_https_servers.html)
- IIS: [Create a Self Signed Certificate in IIS](https://aboutssl.org/how-to-create-a-self-signed-certificate-in-iis/)
- Tomcat: [Setting Up SSL on Tomcat in 5 minutes](https://dzone.com/articles/setting-ssl-tomcat-5-minutes)
- Node.js: [npm tls](https://nodejs.org/docs/v0.4.1/api/tls.html)

## API Documentation

You can check out the detailed documentation about the APIs of the SDK at
[https://www.dynamsoft.com/camera-enhancer/docs/programming/javascript/api-reference/index.html](https://www.dynamsoft.com/camera-enhancer/docs/programming/javascript/api-reference/index.html).

## Release Notes

Learn about what are included in each release at [https://www.dynamsoft.com/camera-enhancer/docs/programming/javascript/release-note/index.html](https://www.dynamsoft.com/camera-enhancer/docs/programming/javascript/release-note/index.html).

## Next Steps

Now that you have got the SDK integrated, you can choose to move forward in the following directions

1. Learn how to make use of the [Shape Drawing Feature](https://www.dynamsoft.com/camera-enhancer/docs/programming/javascript/user-guide/features/draw-shapes.html).
2. Check out the [official samples on Github](https://github.com/Dynamsoft/camera-enhancer-javascript-samples).
3. Learn about the available [APIs](https://www.dynamsoft.com/camera-enhancer/docs/programming/javascript/api-reference/index.html).