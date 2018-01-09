# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Composite content controls

![](https://img.shields.io/badge/license-MIT-blue.svg)

Pip.WebUI.Composite contains a number of controls to visualize and edit complex unstructured and semi-structured content composed of pictures, documents, locations, video or audio, and, of course, hypertext with formatting and links.

### Composite view 
**Control shows read-only version of composite content. The content structured as blocks with hypertext, images, documents, locations, checklists. The only allowed action is to check/uncheck item in checklists**

**Using**

```html
<pip-composite [elements]="elements" [disabled]="disabled"></pip-composite>
```

```typescript
import { PipCompositeElement, PipCompositeElementTypes } from 'pip-webui2-composite';

...

elements: PipCompositeElement[] = [
        {
            type: PipCompositeElementTypes.TEXT,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            type: PipCompositeElementTypes.CHECKLIST,
            elements: [
                {
                    text: 'Create checklist edit component',
                    checked: true
                },
                {
                    text: 'Create checklist view component',
                    checked: true
                },
                {
                    text: 'Add checklist view component to composite view component',
                    checked: true
                }
            ]
        },
        {
            type: PipCompositeElementTypes.LOCATION,
            location: {
                coordinates: [48.8534100, 2.3488000]
            },
            locationName: 'Paris'
        },
        {
            type: PipCompositeElementTypes.DOCUMENTS,
            documents: [
                {
                    url: './assets/boy.png'
                }
            ]
        },
        {
            type: PipCompositeElementTypes.PICTURES,
            pictures: [
                './assets/boy2.png',
                './assets/girl.png',
                './assets/girl2.png',
                './assets/boy.png'
            ]
        },
        {
            type: PipCompositeElementTypes.TIME,
            startDate: this.startDate,
            endDate: this.endDate
        },
        {
            type: PipCompositeElementTypes.LOCATION,
            location: {
                coordinates: [51.5085300, -0.1257400]
            },
            locationName: 'London'
        }
];
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/composite-view.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/composite-view.png"/>
</a>

### Composite edit 
**Control allows to construct complex content using blocks with hypertext, images, documents, locations and checklists. Blocks can be added, moved up or down or removed. Hypertext is entered using popular markdown format**

**Using**

```html
<div class="scrollable-element">
    <pip-composite-edit #composite [elements]="elements" scrollContainer=".scrollable-element" 
        (onElementsChange)="elements = $event">
    </pip-composite-edit>
</div>
```

```typescript
import { PipCompositeElement, PipCompositeElementTypes } from 'pip-webui2-composite';

...

elements: PipCompositeElement[] = [
        {
            type: PipCompositeElementTypes.TEXT,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            type: PipCompositeElementTypes.CHECKLIST,
            elements: [
                {
                    text: 'Create checklist edit component',
                    checked: true
                },
                {
                    text: 'Create checklist view component',
                    checked: true
                },
                {
                    text: 'Add checklist view component to composite view component',
                    checked: true
                }
            ]
        },
        {
            type: PipCompositeElementTypes.LOCATION,
            location: {
                coordinates: [48.8534100, 2.3488000]
            },
            locationName: 'Paris'
        },
        {
            type: PipCompositeElementTypes.DOCUMENTS,
            documents: [
                {
                    url: './assets/boy.png'
                }
            ]
        },
        {
            type: PipCompositeElementTypes.PICTURES,
            pictures: [
                './assets/boy2.png',
                './assets/girl.png',
                './assets/girl2.png',
                './assets/boy.png'
            ]
        },
        {
            type: PipCompositeElementTypes.TIME,
            startDate: this.startDate,
            endDate: this.endDate
        },
        {
            type: PipCompositeElementTypes.LOCATION,
            location: {
                coordinates: [51.5085300, -0.1257400]
            },
            locationName: 'London'
        }
];
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/composite-edit.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/composite-edit.png"/>
</a>

### Checlist view 
**Control shows read-only version of checklist and only allows to check/uncheck items. This control is integrated inside Composite view, but it also can be used independently**

**Using**

```html
<pip-checklist [disabled]="disabled" [elements]="elements"></pip-checklist>
```

```typescript
import { PipChecklistElement } from '../pip-webui2-composite';

...

elements: PipChecklistElement[] = [
        {
            text: 'Buy christmas tree',
            checked: true,
        },
        {
            text: 'Buy gifts',
        },
        {
            text: 'Go to the gym on Saturday',
        },
        {
            text: 'Finish magistry site',
        },
        {
            text: 'Some text here...',
        }
];
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/checklist-view.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/checklist-view.png"/>
</a>

### Checlist edit 
**Control allows to edit checklist with textual items. It allows to append or insert new items, edit them, change their order or remove them. This control is integrated into Composite edit, but it can also be used independently**

**Using**

```html
<pip-checklist-edit [disabled]="disabled" [elements]="elements"></pip-checklist-edit>
```

```typescript
import { PipChecklistElement } from '../pip-webui2-composite';

...

elements: PipChecklistElement[] = [
        {
            text: 'Buy christmas tree',
            checked: true,
        },
        {
            text: 'Buy gifts',
        },
        {
            text: 'Go to the gym on Saturday',
        },
        {
            text: 'Finish magistry site',
        },
        {
            text: 'Some text here...',
        }
];
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/checklist-edit.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/checklist-edit.png"/>
</a>

### Composite toolbar

**Control helps to construct own vesion of a simple composite content. By clicking a button user can add text, images, files, location, date or checklist elements**

**Using**

```html
<pip-composite-edit #composite></pip-composite-edit>

<pip-composite-toolbar [compositeEdit]="composite"></pip-composite-toolbar>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/composite-toolbar.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-composite/raw/master/doc/images/composite-toolbar.png"/>
</a>

## Installation

To install this module using npm:

```bash
npm install pip-webui2-composite --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
