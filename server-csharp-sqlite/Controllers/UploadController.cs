using System;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;

namespace server_csharp_sqlite.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class UploadController : ControllerBase
  {

    [HttpPost]
    public IActionResult Upload([FromForm] UploadForm myForm, string saveid)
    {
      try
      {
        Console.WriteLine(myForm.Name);
        // get the file from the request
        var file = Request.Form.Files[0];

        // get the folder path for images
        var folderName = Path.Combine("wwwroot", "images");

        // full directory
        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

        // file has content
        if (file.Length > 0)
        {
          var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
          var uniqueFileName = Convert.ToString(Guid.NewGuid());
          var fileExtension = Path.GetExtension(fileName);
          // ex: 6154b7c7-b3a8-4b8c-af21-f2a069d1a022.jpg
          var newFileName = uniqueFileName + fileExtension;
        string sql = "insert Tablename (name, datetime), (@name, @datetime))";
          var fullPath = Path.Combine(pathToSave, newFileName);
          using (var stream = new FileStream(fullPath, FileMode.Create))
          {
            file.CopyTo(stream);
          }
          return Ok();
        }


      }
      catch (Exception ex)
      {
        return Ok();
      }
      return Ok();
    }

  }

  public class UploadForm
  {
    public string Name { get; set; }
  }

}