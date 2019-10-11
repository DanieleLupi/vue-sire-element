import ElTabs from "element-ui/packages/tabs/src/tabs.vue"
import TabNav from './TabNavFlex.js';

export default {
    components: {
        TabNav
    },
    extends: ElTabs,
    render() {
        let {
            type,
            handleTabClick,
            handleTabRemove,
            handleTabAdd,
            currentName,
            panes,
            editable,
            addable,
            tabPosition,
            stretch
        } = this;

        const newButton = editable || addable
            ? (
                <span
                    class="el-tabs__new-tab"
                    on-click={handleTabAdd}
                    tabindex="0"
                    on-keydown={(ev) => { if (ev.keyCode === 13) { handleTabAdd(); } }}
                >
                    <i class="el-icon-plus"></i>
                </span>
            )
            : null;

        const navData = {
            props: {
                currentName,
                onTabClick: handleTabClick,
                onTabRemove: handleTabRemove,
                editable,
                type,
                panes,
                stretch
            },
            ref: 'nav'
        };
        const header = (
            <fx-col class={['el-tabs__header', `is-${tabPosition}`]}>
                {newButton}
                <si-tab-nav-flex {...navData}></si-tab-nav-flex>
            </fx-col>
        );
        const panels = (
            <fx-col class="el-tabs__content">
                {this.$slots.default}
            </fx-col>
        );

        return (
            <fx-row class={{
                'el-tabs': true,
                'el-tabs--card': type === 'card',
                [`el-tabs--${tabPosition}`]: true,
                'el-tabs--border-card': type === 'border-card'
            }}>
                {tabPosition !== 'bottom' ? [header, panels] : [panels, header]}
            </fx-row>
        );
    }
};