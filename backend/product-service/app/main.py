from fastapi import FastAPI

app = FastAPI(
    title="Product Service",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Product Service Running"
    }