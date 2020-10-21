# NgxFreeFullpage

ngx-free-fullpage is a free-for-profit angular library that gives you all the tools you need to implement a fullpage scroll effect. This library hasn't been developed in order to substitute the current ngx-fullpage, this library is an alternative for those projects that are seeking a free library to implement this effect.

## How to use (easy peasy)

Run `npm i ngx-free-fullpage` to install the library. 

This library is based on directives in order to give you a simple way of implementing the different components of this effect. Now lets see the code: 

Firstly, we must import the main module of the library `NgxFullpageModule`, this module contains the minimal directives, which are `NgxFullpageWrapperDirective` and `NgxFullpageSectionDirective`. Their selectors are respectively, `ngx-fullpage-wrapper` and `ngx-fullpage-section`.

So our `app.module.ts` (or other module) should be like this
```javascript
    imports: [
    //Your other imports,
    NgxFullpageModule,
    ];
```

and our `whatever.component.html` must be kind of:

```
    <div class="fullscreen" ngx-fullpage-wrapper>
        <div ngx-fullpage-section>
            This is the first section
        </div>
        <div ngx-fullpage-section>
            This is second
        </div>
        <div ngx-fullpage-section>
            I'm the last one =(
        </div>
    </div>
```

With this code, the effect would be implemented but if you need some other feautures check the section below out.


## Additional Directives

##### In order to use these directives, they must be wrapped inside `ngx-fullpage-wrapper` directive
#
#
The previous section just show how to implement the effect, but there are also some other interesting directives that add features to the library. There are 6:

* `ngx-fullpage-next-button` and `ngx-fullpage-prev-button` directives add to the element which are attribute of an onclick event that when is triggered it scrolls to the next (or previous) section. These directives are both imported by `NgxFullpageNextButtonModule`.
#
#
```html
    <button ngx-fullpage-next-button>Next</button> ## Incorrect, it must be inside ngx-fullpage-wrapper
    <div class="fullscreen" ngx-fullpage-wrapper>
        <button ngx-fullpage-next-button>Next</button> ## Correct
        <div ngx-fullpage-section>
            This is the first section
        </div>
        <div ngx-fullpage-section>
            This is second
        </div>
        <div ngx-fullpage-section>
            I'm the last one =(
        </div>
    </div>
```
#
* `ngx-fullpage-go-to-first` and `ngx-fullpage-go-to-last` directives add to the element which are attribute of an onclick event that when is triggered it scrolls to the first/last section. These directives are imported by `NgxFullpageToFirstButtonModule` and `NgxFullpageGoToLastModule` respectively. 
#
#
```html
    <div class="fullscreen" ngx-fullpage-wrapper>
        <button ngx-fullpage-go-to-first>Next</button> ## Correct
        <div ngx-fullpage-section>
            This is the first section
        </div>
        <div ngx-fullpage-section>
            This is second
        </div>
        <div ngx-fullpage-section>
            I'm the last one =(
        </div>
    </div>
```

* The last directive is `ngx-fullpage-go-to-section` which receives a section number (starting in 0) and add to the element which is attribute of an onclick event that when is triggered it scrolls to the given section. This directive is imported by `NgxFullpageGoToSectionModule`.
#
#
```html
    <div class="fullscreen" ngx-fullpage-wrapper>
        <button ngx-fullpage-go-to-section="2">Next</button>
        <div ngx-fullpage-section>
            This is the first section
        </div>
        <div ngx-fullpage-section>
            This is second
        </div>
        <div ngx-fullpage-section>
            I'm the last one =(
        </div>
    </div>
```

## Advanced featurings

This library provides you with essential tools in order to implement this effect. But if this is not enough and you need to implement some other features I am gonna ease the process to you. With this aim, I have to explain how the library internally works.

The library is just a set of directives connected by a common service. These directives has a hierarchy because we must put all the directives wrapped inside the root directive (`ngx-fullpage-wrapper`). Why is this necesary? This is due to the way we inject the common service  (`NgxFullpageService`). In order to make possible the coexistence of several `ngx-fullpage-wrapper` in the same page this how I inject `NgxFullpageService`.

This is code of `ngx-fullpage-wrapper`:
```javascript
    @Directive({
      selector: '[ngx-fullpage-wrapper]',
      providers: [NgxFullpageService] // This is what we are interested in.
    })
```    
#
As you can see I imported `NgxFullpageService` in `ngx-fullpage-wrapper` providers. What does this mean? Doing this what we are saying is that for every `ngx-fullpage-wrapper` directive Angular must create an instance of the `NgxFullpageService`. You might be asking how this is related to the hierarchy I mentioned, okey when you inject the service this way, this service instance is accesible from all the child components of the component provided, `ngx-fullpage-wrapper` in our case. So this is why we must wrapped all the directives inside the root.

After explaining this, now I can explain how I can ease you implemeting new features. `NgxFullpageService` has several [implemented functions](https://github.com/clostao/ngx-free-fullpage/blob/master/projects/ngx-fullpage/src/lib/ngx-fullpage.service.ts) in order to control the current section. So, as I explained above, the directives inside the `ngx-fullpage-wrapper` have access to the instance of the `NgxFullpageService`, so in order to create new features I gave access to `NgxFullpageService` exporting among the modules. 

The process to create a new feature would be:
* Create a directive.
* Inject into the constructor `NgxFullpageService`.
* Use the tools I created at `NgxFullpageService` and your directive logic to implement your feature.
#
#### If this isn't enough yet
#
If this isn't enought yet, then you probably need to access the `NgxFullpageService`. Due to this is not an option, I only could ask if you may be interested in participate in the library development. If so, please write me to carloslostaofdz@gmail.com or just make a pull request to [git repo](https://github.com/clostao/ngx-free-fullpage).