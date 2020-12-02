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
       public int CardNo { get; set; }
        public string BackgroundColor { get; set; } = "#ddfdef";
     
        public string TextColor { get; set; } = "black";
        public bool IsPinned { get; set; }
        public List<TodoItemModel> Items = new List<TodoItemModel>();
    }

    public class BackgroundColorModel
    {
        public bool IsRandomColored { get; set; } 
        public string DefaultColor { get; set; } = "#ddfdef";
    }
}
