cdescribe("Modal", () => {
    require('../src/js/egodesign.modal.js');s
    const egoModal = new EgoModal({
        element: document.getElementById('egoModal')
    });
  
    test("defines setRule()", () => {
      expect(typeof egoModal).toBe("function");
    });
});