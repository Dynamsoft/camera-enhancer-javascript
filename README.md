# Dynamsoft Camera Enhancer for Your Website

Dynamsoft Camera Enhancer allows your website to easily control the camera in the browser on desktop or mobile devices.

With the SDK integrated, your users can open your website in a browser, access their cameras to stream live video and acquire real-time frames for further processing. The SDK also supports simple shape drawing, allowing information to be presented directly on the video stream or over a static image for integrated user interaction.

In this guide, you will learn step by step on how to integrate the Dynamsoft Camera Enhancer SDK into your website.

- [Dynamsoft Camera Enhancer for Your Website](#dynamsoft-camera-enhancer-for-your-website)
  - [Getting Started](#getting-started)
    - [Include the SDK](#include-the-sdk)
      - [Use a CDN](#use-a-cdn)
      - [Host the SDK yourself](#host-the-sdk-yourself)
    - [Use the SDK](#use-the-sdk)
      - [Show live video stream on the page](#show-live-video-stream-on-the-page)
      - [Capture image frames from the video stream](#capture-image-frames-from-the-video-stream)
      - [Use ImageEditorView and the Drawing Logic](#use-imageeditorview-and-the-drawing-logic)
      - [Customize the UI](#customize-the-ui)
  - [Hosting the SDK](#hosting-the-sdk)
    - [Step One: Deploy the dist folder](#step-one-deploy-the-dist-folder)
    - [Step Two: Configure the Server](#step-two-configure-the-server)
    - [Step Three: Include the SDK from the server](#step-three-include-the-sdk-from-the-server)
  - [FAQ](#faq)
    - [Can I open the web page directly from the hard drive?](#can-i-open-the-web-page-directly-from-the-hard-drive)
    - [Why can't I use my camera?](#why-cant-i-use-my-camera)
  - [API Documentation](#api-documentation)
  - [System Requirements](#system-requirements)
  - [Release Notes](#release-notes)
  - [Next Steps](#next-steps)

## Getting Started

### Include the SDK

To use the SDK, we first include the following packages:

1. `dynamsoft-camera-enhancer`: Required, it provides the camera related functionalities used in this guide.
2. `dynamsoft-core`: Required, it includes basic classes, interfaces, and enumerations that are shared between all Dynamsoft SDKs.
3. `dynamsoft-license`: Optional, if you wish to utilize advanced features such as auto-zoom, enhanced focus, and tap-to-focus, you will need to include it.

#### Use a CDN

The simplest way to include the SDK is to use a CDN such as [jsDelivr](https://jsdelivr.com/) or [UNPKG](https://unpkg.com/).

- jsDelivr

  ```html
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-core@3.0.30/dist/core.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-license@3.0.20/dist/license.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer@4.0.1/dist/dce.js"></script>
  ```

- UNPKG  

  ```html
  <script src="https://unpkg.com/dynamsoft-core@3.0.30/dist/core.js"></script>
  <script src="https://unpkg.com/dynamsoft-license@3.0.20/dist/license.js"></script>
  <script src="https://unpkg.com/dynamsoft-camera-enhancer@4.0.1/dist/dce.js"></script>
  ```

> In some rare cases, you might not be able to access the CDN. If this happens, you can use
>- [https://download2.dynamsoft.com/packages/dynamsoft-core@3.0.30/dist/core.js](https://download2.dynamsoft.com/packages/dynamsoft-core@3.0.30/dist/core.js)
>- [https://download2.dynamsoft.com/packages/dynamsoft-license@3.0.20/dist/license.js](https://download2.dynamsoft.com/packages/dynamsoft-license@3.0.20/dist/license.js)
>- [https://download2.dynamsoft.com/packages/dynamsoft-camera-enhancer@4.0.1/dist/dce.js](https://download2.dynamsoft.com/packages/dynamsoft-camera-enhancer@4.0.1/dist/dce.js)

#### Host the SDK yourself

Besides using the CDN, you can also download the SDK and host it locally.

The following shows a few ways to download the SDK.

- From the website

  [Download the JavaScript ZIP Package](https://www.dynamsoft.com/camera-enhancer/downloads/1000021-confirmation/?utm_source=npm)

- yarn

  ```cmd
  yarn add dynamsoft-camera-enhancer
  ```

- npm

  ```cmd
  npm install dynamsoft-camera-enhancer --save
  ```

> Note: Upon installation of `dynamsoft-camera-enhancer`, a compatible versions of `dynamsoft-core` will be automatically installed if not installed already.

Depending on how you downloaded the SDK and where you put it. You can typically include it like this:

```html
<script src="./dynamsoft-camera-enhancer-js-4.0.1/dynamsoft/distributables/dynamsoft-core@3.0.30/dist/core.js"></script>
<script src="./dynamsoft-camera-enhancer-js-4.0.1/dynamsoft/distributables/dynamsoft-camera-enhancer@4.0.1/dist/dce.js"></script>
```

or

```html
<script src="./node_modules/dynamsoft-core/dist/core.js"></script>
<script src="./node_modules/dynamsoft-camera-enhancer/dist/dce.js"></script>
```

or

```typescript
import { CameraEnhancer, CameraView } from 'dynamsoft-camera-enhancer';
```

Read more on [how to host the SDK](#hosting-the-sdk).

### Use the SDK

#### Show live video stream on the page

We can create a `CameraEnhancer` instance to open and show the video stream on the page. The following code snippet demonstrates the complete process:

1. Create a `CameraView` instance. In our case, it's named `cameraView`;
2. Pass `cameraView` to the method `createInstance()` to create a `CameraEnhancer` instance. This way, `cameraView` is bound to the created object `cameraEnhancer`;
3. Show the UI element of `cameraView` by appending it to an existing element in the DOM;
4. Open the video stream which will show up in the UI Element.

```html
<!-- Define an element to hold the UI element -->
<div id="enhancerUIContainer" style="width:1280px;height:720px;"></div>
<script>
  (async () => {
      // Initializes the license for using the SDK in the application.
      Dynamsoft.License.LicenseManager.initLicense("DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9");
      // A default UI will be used if no parameter is passed to 'CameraView.createInstance()'.
      let cameraView = await Dynamsoft.DCE.CameraView.createInstance();
       // Create 'CameraEnhancer' instance and pass 'cameraView' to it.
      let cameraEnhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance(cameraView);
      // Get 'CameraView' instance's UI and append it to DOM.
      document.querySelector("#enhancerUIContainer").append(cameraView.getUIElement());
      // Open the camera and start streaming the video on the page.
      await cameraEnhancer.open();
  })();
</script>
```

#### Capture image frames from the video stream

There are two ways to capture image frames with Dynamsoft Camera Enhancer.

- Capture a single latest frame

  This is done with the method [fetchImage()](https://www.dynamsoft.com/camera-enhancer/docs/web/programming/javascript/api-reference/acquisition.html#fetchimage) as shown in the following code snippet:

  ```javascript
  let img = cameraEnhancer.fetchImage();
  document.body.appendChild(img.toCanvas());
  ```

- Start a capture loop that captures multiple frames at a steady interval into a buffer and then read frames from the buffer. The following code snippet shows how it works:

  ```javascript
  // Capture an image frame every 2 seconds and subsequently append it to the buffer.
  cameraEnhancer.setImageFetchInterval(2000);
  // The event "frameAddedToBuffer" is triggered whenever a new frame is added to the buffer.
  cameraEnhancer.on("frameAddedToBuffer", () => {
    let img = cameraEnhancer.getImage();
    console.log(img);
  });
  // Start the built-in fetching loop.
  cameraEnhancer.startFetching();
  ```
  
#### Use ImageEditorView and the Drawing Logic

The other view class ImageEditorView is designed to show a single image. The following code snippet shows a single frame in an `ImageEditorView` instance and draws a rectangle on the image:

```html
<div id="imageEditorContainer" style="width:1280px;height:720px;"></div>
```

```javascript
// The default UI will be used if no parameter is provided to 'ImageEditorView.createInstance()'.
let editorView = await Dynamsoft.DCE.ImageEditorView.createInstance();
// Retrieve the UI of the 'editorView' instance and append it to the DOM.
document.querySelector("#imageEditorContainer").append(editorView.getUIElement());
// When the video is already playing, capture an image and draw it on the ImageEditorView.
let img = cameraEnhancer.fetchImage();
editorView.setOriginalImage(img);
// Draw a rectangle on the image.
let drawingLayer = editorView.createDrawingLayer();
let rect = new Dynamsoft.DCE.DrawingItem.RectDrawingItem(
  {
    x: 100,
    y: 100,
    width: 1070,
    height: 520
  });
drawingLayer.addDrawingItems([rect]);
```

Once the rectangle appears on the image, you can click to select it and adjust its position, size, etc. 

Read more about [How to draw shapes](https://www.dynamsoft.com/camera-enhancer/docs/web/programming/javascript/user-guide/features/draw-shapes.html).

#### Customize the UI

The built-in UI of the `CameraView` instance is defined in the file `dist/dce.ui.html`. You can copy the file `dist/dce.ui.html` to your project, modify it and pass its path in the API `createInstance` to set it as the default UI.

```javascript
// The following line needs to be executed before the API `open()` is called to take effect.
Dynamsoft.DCE.CameraView.createInstance("THE-URL-TO-THE-FILE");
```

- Build the UI element into your own web page and specify it when calling `createInstance`.

  - Embed only the video

  ```html
  <div id="enhancerUIContainer" style="width:1280px;height:720px;background:#ddd;" >
    <div class="dce-video-container" style="width:100%;height:100%;"></div>
  </div>
  <script>
      (async () => {
        // Initializes the license for using the SDK in the application.
        Dynamsoft.License.LicenseManager.initLicense("DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9");
        // Create 'CameraView' instance and pass the element "enhancerUIContainer" as its UI.
        let cameraView = await Dynamsoft.DCE.CameraView.createInstance(document.getElementById("enhancerUIContainer"));
        let cameraEnhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance(cameraView);
        await cameraEnhancer.open();
      })();
  </script>
  ```

  > The video element will be created and appended to the DIV element with the class `dce-video-container`, make sure the class name is the same.

  - Add the camera list and resolution list. If the class names for these lists match the default ones,  `dce-sel-camera` and `dce-sel-resolution` , the SDK will automatically populate the lists and handle the camera/resolution switching.

  ```html
  <div id="enhancerUIContainer" style="position:relative;width:1280px;height:720px;background:#ddd;" >
    <div class="dce-video-container" style="width:100%;height:100%;"></div>
    <div style="position: absolute;left: 0;top: 0;">
      <select class="dce-sel-camera" style="display: block;"></select>
    </div>
  </div>
  ```

  ```html
  <div id="enhancerUIContainer" style="position:relative;width:1280px;height:720px;background:#ddd;" >
    <div class="dce-video-container" style="width:100%;height:100%;"></div>
    <div style="position:absolute;left:0;top:0;">
      <select class="dce-sel-camera" style="display:block;"></select>
      <select class="dce-sel-resolution" style="display:block;margin-top:5px;"></select>
    </div>
  </div>
  ```

  > By default, only 3 hard-coded resolutions (1920 x 1080, 1280 x 720, 640 x 480), are populated as options. You can show a customized set of options by hardcoding them.

  ```html
  <select class="dce-sel-resolution">
      <option class="dce-opt-gotResolution" value="got"></option>
      <option data-width="1920" data-height="1080">1920x1080</option>
      <option data-width="1280" data-height="720">1280x720</option>
      <option data-width="640" data-height="480">640x480</option>
  </select>
  ```

  > Generally, you need to provide a resolution that the camera supports. However, in case a camera does not support the specified resolution, it usually uses the closest supported resolution. As a result, the selected resolution may not be the actual resolution. In this case, add an option with the class name `dce-opt-gotResolution` (as shown above) and the SDK will then use it to show the **actual resolution**.

## Hosting the SDK

### Step One: Deploy the dist folder

Once you have downloaded the SDK, you can locate the "dist" directory and copy it to your project (usually as part of your website / web application). The following shows some of the files in this directory:

- `dce.js` // The main SDK file
- `dce.mjs` // For using the SDK as a module (`<script type="module">`)
- `dce.ui.html` // Defines the default cameraEnhancer UI

### Step Two: Configure the Server

- Enable HTTPS

  To use the SDK, you must access your website / web application via a secure HTTPS connection. This is due to browser security restrictions which only grant camera video streaming access to a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).

  > For convenience, self-signed certificates can be used during development and testing. You can also use "http://localhost" which allows camera access without an SSL certificate.

### Step Three: Include the SDK from the server

Now that the SDK is hosted on your server, you can include it accordingly.

```html
<script src="https://www.yourwebsite.com/PATH-TO-THE-SDK/dynamsoft-camera-enhancer/dist/dce.js"></script>
```

## FAQ

### Can I open the web page directly from the hard drive?

Yes, for simple testing purposes, it's ok to open the file directly from the hard drive (`file://`). However, you might encounter some issues in doing so (cannot access camera, etc.). The recommendation is to deploy this page to your web server and run it over **HTTPS** or use "http://localhost" during development.

If you don't have a ready-to-use web server but have a package manager like *npm* or *yarn*, you can set up a simple HTTP server in minutes. Check out [`http-server` on npm](https://www.npmjs.com/package/http-server) or [`http-server` on yarn](https://yarnpkg.com/package/http-server).

### Why can't I use my camera?

If you open the web page as `http://` , the camera may not work and you see a warnings or an error in the browser console. This is usually because the API [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) requires HTTPS to access the camera.

To make sure your web application can access the camera, please configure your web server to support HTTPS. The following links may help.

- NGINX: [Configuring HTTPS servers](https://nginx.org/en/docs/http/configuring_https_servers.html)
- IIS: [Create a Self Signed Certificate in IIS](https://aboutssl.org/how-to-create-a-self-signed-certificate-in-iis/)
- Tomcat: [Setting Up SSL on Tomcat in 5 minutes](https://dzone.com/articles/setting-ssl-tomcat-5-minutes)
- Node.js: [npm tls](https://nodejs.org/docs/v0.4.1/api/tls.html)

## API Documentation

You can check out the detailed documentation about the APIs of the SDK at
[https://www.dynamsoft.com/camera-enhancer/docs/programming/javascript/api-reference/index.html](https://www.dynamsoft.com/camera-enhancer/docs/web/programming/javascript/api-reference/index.html).

## System Requirements

DCE requires the following features to work:

* Secure context (HTTPS deployment)

  When deploying your application / website for production, make sure to serve it via a secure HTTPS connection. This is required for two reasons
  
  * Access to the camera video stream is only granted in a security context. Most browsers impose this restriction.
  > Some browsers like Chrome may grant the access for `http://127.0.0.1` and `http://localhost` or even for pages opened directly from the local disk (`file:///...`). This can be helpful for temporary development and test.
  
  * Dynamsoft License requires a secure context to work.

* `MediaDevices`/`getUserMedia`

  This API is only required for in-browser video streaming.

* `getSettings`

  This API inspects the video input which is a `MediaStreamTrack` object about its constrainable properties.

The following table is a list of supported browsers based on the above requirements:

  | Browser Name | Version |
  | :----------: | :-----: |
  |    Chrome    |  v59+   |
  |   Firefox    |  v63+   |
  |     Edge     |  v79+   |
  |    Safari    |  v11+   |

Apart from the browsers, the operating systems may impose some limitations of their own that could restrict the use of the SDK. Browser compatibility ultimately depends on whether the browser on that particular operating system supports the features listed above.

## Release Notes

Learn about what are included in each release at [https://www.dynamsoft.com/camera-enhancer/docs/programming/javascript/release-note/index.html](https://www.dynamsoft.com/camera-enhancer/docs/web/programming/javascript/release-note/index.html).

## Next Steps

Now that you have got the SDK integrated, you can choose to move forward in the following directions

1. Check out the [official samples on Github](https://github.com/Dynamsoft/camera-enhancer-javascript-samples).
2. Learn about the available [APIs](https://www.dynamsoft.com/camera-enhancer/docs/web/programming/javascript/api-reference/index.html).
3. Learn more about the [Shape Drawing Feature](https://www.dynamsoft.com/camera-enhancer/docs/web/programming/javascript/user-guide/features/draw-shapes.html).