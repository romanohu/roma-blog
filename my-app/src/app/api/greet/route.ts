
export async function POST(req: Request) {
    const body = await req.json();

    const name = body.name ?? 'ゲスト';
    const message = body.message ?? 'メッセージがありません。';

    return Response.json({
        success: true,
        reply: `こんにちは、${name}さん！ ${message}を受け取りました。`,
    });
}