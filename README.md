# Dynamsoft Camera Enhancer for Your Website

Allow your website to easily control cameras on desktop and mobile devices.

Once integrated, your users can open your website in a browser, access their cameras to stream live video and acquire realtime frames.

In this guide, you will learn step by step on how to integrate this library into your website.

**Table of Contents**

* [Getting Started](#getting-started)
  + [Include the library](#include-the-library)
  + [Interact with the library](#interact-with-the-library)
* [Hosting the Library](#hosting-the-library)
* [FAQ](#faq)

**Example Usage**

Read the user guide of Dynamsoft Label Recognizer on how DCE helps the SDK achieve video recognition:

* [Dynamsoft Label Recognizer User Guide](https://www.dynamsoft.com/label-recognition/programming/javascript/user-guide.html?ver=latest&utm_source=dceguide)

## Getting Started

### Include the library

#### Use a CDN

The simplest way to include the library is to use either the [jsDelivr](https://jsdelivr.com/) or [UNPKG](https://unpkg.com/) CDN.

* jsDelivr

```html
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer@2.3.0/dist/dce.js"></script>
```

* UNPKG  

```html
  <script src="https://unpkg.com/dynamsoft-camera-enhancer@2.3.0/dist/dce.js"></script>
```

#### Host the library yourself (recommended)

Besides using the CDN, you can also download the library and host it locally.

The following shows a few ways to download the library.

* From the website

  [Download the JavaScript Package](https://www.dynamsoft.com/camera-enhancer/downloads/1000021-confirmation/?utm_source=github)

* yarn

```cmd
$ yarn add dynamsoft-camera-enhancer
```

* npm

```
$ npm install dynamsoft-camera-enhancer --save
```

Depending on how you downloaded the library and where you put it. You can typically include it like this:

```html
<script src="/dce-js-2.3.0/dist/dce.js"></script>

or

```html
<script src="/node_modules/dynamsoft-camera-enhancer/dist/dce.js"></script>
```

Read more on [how to host the library](#hosting-the-library).

### Interact with the library

#### Create a `CameraEnhancer` object

To use the library, we need to create a `CameraEnhancer` object first.

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
        document.getElementById("enhancerUIContainer").appendChild(enhancer.getUIElement());
        await enhancer.open(true);
    })();
</script>
```

#### Customize the UI

The built-in UI of the `CameraEnhancer` object is defined in the file `dist/dce.ui.html` . There are a few ways to customize it:

* Modify the file `dist/dce.ui.html` directly. 

  This option is only possible when you host this file on your own web server instead of using a CDN.

* Copy the file `dist/dce.ui.html` to your project, modify it and use the the API `defaultUIElementURL` to set it as the default UI.

```javascript
Dynamsoft.DCE.CameraEnhancer.defaultUIElementURL = "THE-URL-TO-THE-FILE";
```

  > You must set `defaultUIElementURL` before you call `createInstance()` .

* Append the default UI element to your page as shown in [Configure the CameraEnhancer object](#configure-the-cameraenhancer-object), customize it before showing it.

```html
<!-- Define an element to hold the UI element -->
<div id="enhancerUIContainer" style="width:100%;height:500px;"></div>
<script>
    (async () => {
        let enhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance();
        document.getElementById("enhancerUIContainer").appendChild(enhancer.getUIElement());
        // The following line hides the close button
        document.getElementsByClassName("dce-btn-close")[0].style.display = "none";
        await enhancer.open(true);
    })();
</script>
```

* Build the UI element into your own web page and specify it with the API `setUIElement(HTMLElement)`.

  + Embed only the video

```html
<div id="enhancerUIContainer" style="width:100%;height:100%;">
    <div class="dce-video-container" style="position:relative;width:100%;height:500px;"></div>
</div>
<script>
    (async () => {
        let enhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance();
        await enhancer.setUIElement(document.getElementById("enhancerUIContainer"));
        await enhancer.open(true);
    })();
</script>
```

  > The inner div element must have the class `dce-video-container`, and the CSS property `position` must be `relative` or `absolute`.

  + Add the camera list and resolution list. If the class names for these lists match the default ones,  `dce-sel-camera` and `dce-sel-resolution` , the library will automatically populate the lists and handle the camera/resolution switching.

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
    <option data-width="1280" data-height="720">1280x720</option>
    <option data-width="800" data-height="600">800x600</option>
    <option data-width="640" data-height="480">640x480</option>
</select>
```

  > Generally, you need to provide a resolution that the camera supports. However, in case a camera does not support the specified resolution, it usually uses the cloest supported resolution. As a result, the selected resolution may not be the actual resolution. In this case, add an option with the class name `dce-opt-gotResolution` (as shown above) and the library will then use it to show the **actual resolution**.

## Hosting the library

### Step One: Deploy the dist folder

Once you have downloaded the library, you can locate the "dist" directory and copy it to your project (usually as part of your website / web application). The following shows some of the files in this directory:

* `dce.js` // The main library file
* `dce.mjs` // For using the library as a module (`<script type="module">`)
* `dce.ui.html` // Defines the default enhancer UI

### Step Two: Configure the Server

* Enable HTTPS

  To use the library, you must access your website / web application via a secure HTTPS connection. This is due to browser security restrictions which only grant camera video streaming access to a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).

  > For convenience, self-signed certificates are allowed during development and testing.

### Step Three: Include the library from the server

Now that the library is hosted on your server, you can include it accordingly.

```html
<script src="https://www.yourwebsite.com/dynamsoft-camera-enhancer/dist/dce.js"></script>
```

## FAQ

### Can I open the web page directly from the hard drive?

Yes, for simple testing purposes, it's perfectly fine to open the file directly from the hard drive. However, you might encounter some issues in doing so (like unable to access the camera, etc.). The recommendation is to deploy this page to your web server and run it over **HTTPS**. If you don't have a ready-to-use web server but have a package manager like *npm* or *yarn*, you can set up a simple HTTP server in minutes. Check out [ `http-server` on npm](https://www.npmjs.com/package/http-server) or [yarn](https://yarnpkg.com/package/http-server). 

### Why can't I use my camera?

If you open the web page as `http://` , the camera may not work and you see the following error in the browser console:

> [Deprecation] getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.

* In Safari 12 the equivalent error is:

> Trying to call getUserMedia from an insecure document.

You get this error because the API [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) requires HTTPS to access the camera.

To make sure your web application can access the camera, please configure your web server to support HTTPS. The following links may help.

  + NGINX: [Configuring HTTPS servers](https://nginx.org/en/docs/http/configuring_https_servers.html)
  + IIS: [Create a Self Signed Certificate in IIS](https://aboutssl.org/how-to-create-a-self-signed-certificate-in-iis/)
  + Tomcat: [Setting Up SSL on Tomcat in 5 minutes](https://dzone.com/articles/setting-ssl-tomcat-5-minutes)
  + Node.js: [npm tls](https://nodejs.org/docs/v0.4.1/api/tls.html)
