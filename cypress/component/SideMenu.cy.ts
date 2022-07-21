import SideBar from '@/components/SideBar.vue'

describe('SideMenu.cy.ts', () => {
  it('Displays Side Menu', () => {
    cy.mount(() => <SideBar>Hello World </SideBar>)
      .get('#sidebar');
  })
})