import os
import base64

# 读取图片文件并转换为Base64编码
def image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# 生成包含Base64图片的Markdown代码并保存为txt文件
def generate_markdown_with_base64(image_path, title="aigc"):
    # 获取图片的文件名（不带扩展名）和扩展名
    image_name = os.path.splitext(os.path.basename(image_path))[0]
    image_extension = os.path.splitext(image_path)[1].replace('.', '')
    
    # 将图片转为Base64编码
    base64_str = image_to_base64(image_path)
    
    # 构造Base64图片的Markdown格式
    markdown_code = f"![{title}](data:image/{image_extension};base64,{base64_str})"
    
    # 获取图片所在目录，并设置输出的txt文件路径
    image_dir = os.path.dirname(image_path)
    output_path = os.path.join(image_dir, f"{image_name}.txt")
    
    # 将Markdown代码写入txt文件
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(markdown_code)
    
    print(f"Markdown代码已生成并保存至: {output_path}")

# 示例调用
image_path = r"D:\Hexo-Blog\blog-demo\source\img\article001\AIGC.png" # 例如：C:/path/to/image/watermelon.png
generate_markdown_with_base64(image_path)
