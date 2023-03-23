---
title: Creating Block
description: This is a guide for creating blocks in Sketchware pro.
sidebar_position: 1
---
To create Block in Sketchware pro you need to know some terms of Block.

## Create a Block in Sketchware
Step 1: Go to Sketchware and click on 3 dots.

![Open menu](assets/creating-block/open_menu.png)


Step 2: Go to developer tools.

![Developer Tools](assets/creating-block/developer-tools.png)


Step 3: Select Block manager.

![Block manager](assets/creating-block/block-manager.png)


Step 4: Click on Add icon.

![Add block](assets/creating-block/add-block.png)


Step 5: Enter a name for the palette name as you want and select a color by clicking on the color icon and then clicking on save.

![Creating palette](assets/creating-block/creating-block.png)


Step 6: Here at the bottom a palette has been created successfully just click it and it will open a new screen.

![Palette Created](assets/creating-block/pallette-created.png)


Step 7: Click on add icon.

![Add](assets/creating-block/create-block-icon.png)


Step 8: Fill in the fields as your need and click on Save.

![block_fields](assets/creating-block/fields.png)


## Block fields
| Field | Explanation | Required |
| --- | --- | --- |
| [Name](#name) | This is a unique name of your Block. Sketchware uses this to identify different Blocks. This field should not be the same as other blocks. | Yes |
| [Type](#type) | Please enter value according to your block code(Eg. Void,If-then,If-else etc). | Yes |
| [Type Name](#type-name) | Read [Type Name](#type-name) | If [Type](#type) is `c` then this field is required. |

### Name
This is a unique name for a block. Sketchware pro uses this as the id of the block. If you use a Block in a project then Sketchware pro will use this property to identify each block and its code. This property cannot be the same for other blocks because it may cause errors.
### Type
Study the below data.
- regular

![type-regular](assets/creating-block/block-shapes/type-regular.png)
- c(if block)

![type-c](assets/creating-block/block-shapes/type-c.png)
- e(if-else block)

![type-e](assets/creating-block/block-shapes/type-e.png)
- s(String)

![block-type-shape](assets/creating-block/block-shapes/type-string.png)
- b(Boolean)

![type-b](assets/creating-block/block-shapes/type-b.png)
- d(Number)

![type-d](assets/creating-block/block-shapes/type-d.png)
- v(Variable)

![block-type-shape](assets/creating-block/block-shapes/type-string.png)
- a(Map)

![block-type-shape](assets/creating-block/block-shapes/type-string.png)
- f(stop block)

![type-f](assets/creating-block/block-shapes/type-f.png)
- l(List)

![block-type-shape](assets/creating-block/block-shapes/type-string.png)
- c(Component)

![block-type-shape](assets/creating-block/block-shapes/type-string.png)

### Type Name
This field is not required until the [Type Name](#type-name) is `c`.
This property tells Sketchware pro that the block is related to a component that is defined in the **Type Name** property.
