import * as React from 'react';

export interface A11yWidgetProps {
    /** Extra classes applied to the trigger button (e.g. positioning utilities). */
    className?: string;
    /**
     * Initial widget theme. When omitted or set to 'auto', the widget infers
     * the theme from the page's <html> element and falls back to light.
     */
    theme?: 'auto' | 'light' | 'dark' | null;
}

export declare function A11yWidget(
    props: A11yWidgetProps
): React.ReactElement | null;

export default A11yWidget;
