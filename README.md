# vue-sire-element
Element UI extensions

## setup

### npm

```shell
npm install @sidline/vue-sire-element
```

---

Register the components globally.

```javascript
import Vue from 'vue';
import SIreElement from '@sidline/vue-sire-element';

Vue.use(SIreElement);
```
## components


### SICardFlex

#### properties
| Property | Type | Default | Accepted Values |
| :--- | :--- | :--- | :--- |
| `fxFill` | Boolean | true | |
| `fxGutter` | String | 'none' | "none", "small", "medium", "large" |
| `fxNoGrow` | Boolean | false | |
| `header` | String | null | |
| `shadow` | String | null | "always", "hover", "never" |

#### slots
| Name | Description |
| :--- | :--- |
| `header` | title |

#
#
### SIBasicCard

#### properties
| Property | Type | Default | Accepted Values |
| :--- | :--- | :--- | :--- |
| `fxFill` | Boolean | true | |
| `fxGutter` | String | 'none' | "none", "small", "medium", "large" |
| `fxNoGrow` | Boolean | false | |
| `header` | String | null | |
| `shadow` | String | null | "always", "hover", "never" |

#### slots
| Name | Description |
| :--- | :--- |
| `header` | header |
| `header-title` | title |
| `header-left` | header left button |
| `header-right` | header right button |

#
#
### SIDividerCard

#### properties
| Property | Type | Default | Accepted Values |
| :--- | :--- | :--- | :--- |
| `fxFill` | Boolean | true | |
| `fxGutter` | String | 'none' | "none", "small", "medium", "large" |
| `fxNoGrow` | Boolean | false | |
| `header` | String | null | |
| `labelPosition` | String | "left" | "left", "center", "right" |

#### slots
| Name | Description |
| :--- | :--- |
| `header-left` | header left button |
| `header-right` | header right button |

#
#
### SIDetailCard

#### properties
| Property | Type | Default | Accepted Values |
| :--- | :--- | :--- | :--- |
| `allowCancel` | Boolean | true | |
| `allowDelete` | Boolean | true | |
| `allowSave` | Boolean | true | |
| `header` | String | null | |
| `fxFill` | Boolean | true | |
| `fxGutter` | String | 'none' | "none", "small", "medium", "large" |
| `fxNoGrow` | Boolean | false | |
| `shadow` | String | null | "always", "hover", "never" |

#### slots
| Name | Description |
| :--- | :--- |
| `header` | header |
| `header-title` | title |

#### events
| Name | Description |
| :--- | :--- |
| `cancel` | when cancel battun clicked |
| `delete` | when delete battun clicked |
| `save` | when save battun clicked |

#
#
### SIListCard

#### properties
| Property | Type | Default | Accepted Values |
| :--- | :--- | :--- | :--- |
| `allowDelete` | Boolean | true | |
| `allowInsert` | Boolean | true | |
| `allowUpdate` | Boolean | true | |
| `header` | String | null | |
| `fxFill` | Boolean | true | |
| `fxGutter` | String | 'none' | "none", "small", "medium", "large" |
| `fxNoGrow` | Boolean | false | |
| `shadow` | String | null | "always", "hover", "never" |

#### slots
| Name | Description |
| :--- | :--- |
| `header` | header |
| `header-title` | title |

#### events
| Name | Description |
| :--- | :--- |
| `delete` | when cancel battun clicked |
| `insert` | when delete battun clicked |
| `update` | when save battun clicked |