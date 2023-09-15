import 'Frontend/demo/init'; // hidden-source-line
import { html, LitElement } from 'lit';
import '@vaadin/notification';
import { applyTheme } from 'Frontend/generated/theme';

export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <vaadin-notification-card slot="middle">
        Financial report generated
      </vaadin-notification-card>
    `;
  }
}