import TabNav from 'element-ui/packages/tabs/src/tab-nav.vue';

export default {
    extends: TabNav,
    render() {
        const {
            type,
            panes,
            editable,
            stretch,
            onTabClick,
            onTabRemove,
            navStyle,
            scrollable,
            scrollNext,
            scrollPrev,
            changeTab,
            setFocus,
            removeFocus
        } = this;
        const scrollBtn = scrollable
            ? [
                <span class={['el-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled']} on-click={scrollPrev}><i class="el-icon-arrow-left"></i></span>,
                <span class={['el-tabs__nav-next', scrollable.next ? '' : 'is-disabled']} on-click={scrollNext}><i class="el-icon-arrow-right"></i></span>
            ] : null;
        const tabs = this._l(panes, (pane, index) => {
            let tabName = pane.name || pane.index || index;
            const closable = pane.isClosable || editable;
            pane.index = `${index}`;
            const btnClose = closable
                ? <span class="el-icon-close" on-click={(ev) => { onTabRemove(pane, ev); }}></span>
                : null;
            const tabLabelContent = pane.$slots.label || pane.label;
            const tabindex = pane.active ? 0 : -1;
            return (
                <fx-item fxNoGrow
                    class={{
                        'el-tabs__item': true,
                        [`is-${this.rootTabs.tabPosition}`]: true,
                        'is-active': pane.active,
                        'is-disabled': pane.disabled,
                        'is-closable': closable,
                        'is-focus': this.isFocus
                    }}
                    id={`tab-${tabName}`}
                    key={`tab-${tabName}`}
                    aria-controls={`pane-${tabName}`}
                    role="tab"
                    aria-selected={pane.active}
                    ref="tabs"
                    tabindex={tabindex}
                    refInFor
                    on-focus={() => { setFocus(); }}
                    on-blur={() => { removeFocus(); }}
                    on-click={(ev) => { removeFocus(); onTabClick(pane, tabName, ev); }}
                    on-keydown={(ev) => { if (closable && (ev.keyCode === 46 || ev.keyCode === 8)) { onTabRemove(pane, ev); } }}
                >
                    {tabLabelContent}
                    {btnClose}
                </fx-item>
            );
        });
        return (
            <fx-col class={['el-tabs__nav-wrap', scrollable ? 'is-scrollable' : '', `is-${this.rootTabs.tabPosition}`]}>
                {scrollBtn}
                <fx-item class={['el-tabs__nav-scroll']} ref="navScroll">
                    <fx-item
                        class={['el-tabs__nav', `is-${this.rootTabs.tabPosition}`, stretch && ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'is-stretch' : '']}
                        ref="nav"
                        style={navStyle}
                        role="tablist"
                        on-keydown={changeTab}
                    >
                        {!type ? <tab-bar tabs={panes}></tab-bar> : null}
                        {tabs}
                    </fx-item>
                </fx-item>
            </fx-col>
        );
    },
}