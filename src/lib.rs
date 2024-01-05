use pdf::content::*;
use pdf::file::FileOptions;

use pdf::build::*;
use pdf::object::*;

use pdf::primitive::PdfString;
use serde::{Deserialize, Serialize};
use worker::*;
#[derive(Debug, Deserialize, Serialize)]
struct GenericResponse {
    status: u16,
    message: String,
}

#[event(fetch)]
async fn main(req: Request, env: Env, _ctx: Context) -> Result<Response> {
    Router::new()
        .get_async("/foo", handle_get)
        .get_async("/", test)
        .post_async("/bar", handle_post)
        .delete_async("/baz", handle_delete)
        .run(req, env)
        .await
}

pub async fn handle_get(_: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    Response::from_json(&GenericResponse {
        status: 200,
        message: "You reached a GET route!".to_string(),
    })
}

pub async fn test(_: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    // let req = Request::new("https://example.com", Method::Post)?;
    // let mut resp = Fetch::Request(req).send().await?;
    // resp.cloned()
    let mut build = PdfBuilder::new(FileOptions::cached());
    let mut pages = Vec::new();

    let content = Content::from_ops(vec![
        Op::MoveTo {
            p: Point { x: 100., y: 100. },
        },
        Op::LineTo {
            p: Point { x: 100., y: 200. },
        },
        Op::LineTo {
            p: Point { x: 200., y: 200. },
        },
        Op::LineTo {
            p: Point { x: 200., y: 100. },
        },
        Op::TextDraw { text: "NIHAO" }
        Op::Close,
        Op::Stroke,
    ]);
    let new_page = PageBuilder::from_content(content, &NoResolve);
    match new_page {
        Ok(mut new_page) => {
            new_page.media_box = Some(pdf::object::Rect {
                left: 0.0,
                top: 0.0,
                bottom: 400.0,
                right: 400.0,
            });
            let resources = Resources::default();
            new_page.resources = resources;

            pages.push(new_page);
            let catalog = CatalogBuilder::from_pages(pages);
            let mut info = InfoDict::default();
            info.title = Some(PdfString::from("test"));
            info.author = Some(PdfString::from("xhuan"));
            let data = build.info(info).build(catalog);
            match data {
                Ok(f) => Response::from_bytes(f),
                Err(r) => Response::ok("body"),
            }
        }
        Err(e) => Response::ok("body"),
    }
}
pub async fn handle_post(_: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    Response::from_json(&GenericResponse {
        status: 200,
        message: "You reached a POST route!".to_string(),
    })
}

pub async fn handle_delete(_: Request, _ctx: RouteContext<()>) -> worker::Result<Response> {
    Response::from_json(&GenericResponse {
        status: 200,
        message: "You reached a DELETE route!".to_string(),
    })
}
