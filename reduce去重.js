

      var arr =[{value:'1',id:1},{value:'2',id:2},{value:'1',id:3}]
      var hash = {};
      arr = arr.reduce((item, next) =>{
      hash[next.value] ? '' : hash[next.value] = true && item.push(next);                                           
            return item
      }, [])      