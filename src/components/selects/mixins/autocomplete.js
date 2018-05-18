export default {
  data () {
    return {
      searchValue: null
    }
  },

  methods: {
    filterSearch () {
      if(this.hasCustomFilter){
        return this.items;
      }
      return this.items.filter(i => {
        const text = this.getText(i)
        if (typeof text === 'undefined') return false

        if(this.isTimezone){
          return text.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1
        } 
        return text.toLowerCase().indexOf(this.searchValue.toLowerCase()) === 0
      })
    },
    onKeyDown (e) {
      if(e.key == 'Enter'){
        this.customBlur();
        this.isActive = false;
        return;
      }
      this.$refs.menu.changeListIndex(e);
    }
  }
}
