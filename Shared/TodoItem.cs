using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Shared
{
    public class TodoItemModel
    {
        public string Task { get; set; }
        public bool IsDone { get; set; }
    }

    public class TodoCardModel
    {
       public string Title { get; set; }
       public List<TodoItemModel> Card { get; set; }
    }



}
