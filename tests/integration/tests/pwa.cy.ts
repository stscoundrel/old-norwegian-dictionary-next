describe('PWA support', () => {
  it('Registers a worker at the root scope and precaches the manifest', () => {
    cy.visit('/');
    cy.get('link[rel="manifest"]').should(
      'have.attr',
      'href',
      '/manifest.json',
    );
    cy.window()
      .its('navigator.serviceWorker.controller', { timeout: 15000 })
      .should('not.be.null');
    cy.window().then(async (window) => {
      const registration = await window.navigator.serviceWorker.ready;
      expect(registration.scope).to.equal(`${window.location.origin}/`);
      expect(window.navigator.serviceWorker.controller?.scriptURL).to.equal(
        `${window.location.origin}/sw.js`,
      );
      const manifest = await window.caches.match('/manifest.json', {
        ignoreSearch: true,
      });
      expect(manifest?.ok).to.equal(true);
    });
  });
});

export {};
