
# Immersive Reader - ReactJS Component Wrapper

Sample project to show how [Immersive Reader SDK](https://github.com/microsoft/immersive-reader-sdk/)  can be used within ReactJS app. The Immersive Reader SDK is a set of libraries that allow you to easily and quickly integrate the [Immersive Reader](https://azure.microsoft.com/services/cognitive-services/immersive-reader/) into your application.

Usage: 

### `npm install immersive-reader

## Reference in your code:

### `<ImmersiveReader text={this.state.text} title={this.state.title} locale={this.state.locale} tokenURL={this.state.TokenURL}>

The code would render a button which invokes Immersive Reader. See how it looks on DTML Platform: https://dtml.org

## Parameters:

text: text to render within immersive reader
title: title of the text to render within immersive reader
locale: locale for the button text
tokenURL: Immersive Reader needs a token to authorize calls to Azure Congnitive Services Immersive Reader endpoint. The token endpoint should be setup as a backend service based on [this instructions](https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/quickstarts/client-libraries?pivots=programming-language-csharp). 

