import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def generate_resume(output_path):
    # Standard 1-page letter size: 612 x 792 pt
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=26,
        rightMargin=26,
        topMargin=20,
        bottomMargin=18
    )

    styles = getSampleStyleSheet()
    
    # Custom palette matching original resume
    primary_color = colors.HexColor("#0d746f")  # Deep Teal / Emerald
    dark_color = colors.HexColor("#1e293b")     # Slate-800
    body_color = colors.HexColor("#334155")     # Slate-700
    subtext_color = colors.HexColor("#475569")  # Slate-600
    line_color = colors.HexColor("#0d9488")     # Teal divider

    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=20,
        textColor=primary_color,
        alignment=1
    )

    tagline_style = ParagraphStyle(
        'TaglineStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=colors.HexColor("#0f766e"),
        alignment=1
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10,
        textColor=subtext_color,
        alignment=1
    )

    heading_style = ParagraphStyle(
        'HeadingStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11,
        textColor=primary_color,
        spaceBefore=3,
        spaceAfter=1
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.2,
        textColor=body_color
    )

    bold_body_style = ParagraphStyle(
        'BoldBodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.2,
        textColor=dark_color
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=9.8,
        textColor=body_color,
        leftIndent=10,
        firstLineIndent=-6
    )

    tech_style = ParagraphStyle(
        'TechStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.2,
        textColor=subtext_color,
        leftIndent=10
    )

    story = []

    # Header
    story.append(Paragraph("<b>BOMATHI S</b>", name_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("COMPUTER SCIENCE ENGINEERING STUDENT | DATA ANALYTICS & DATA SCIENCE", tagline_style))
    story.append(Spacer(1, 2))
    
    contact_line = (
        '6381270345 | <font color="#0d746f"><a href="mailto:mathisurya520@gmail.com">mathisurya520@gmail.com</a></font> | '
        'LinkedIn: <font color="#0d746f"><a href="https://www.linkedin.com/in/bomathi-suryaprakasam">linkedin.com/in/bomathi-suryaprakasam</a></font> | '
        'GitHub: <font color="#0d746f"><a href="https://github.com/mathisurya520-hash">github.com/mathisurya520-hash</a></font><br/>'
        'Portfolio: <font color="#0d746f"><a href="https://portfolio-3-tggt.onrender.com/">portfolio-3-tggt.onrender.com</a></font>'
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Spacer(1, 3))

    def section_header(title):
        return [
            Paragraph(f"<b>{title}</b>", heading_style),
            HRFlowable(width="100%", thickness=0.8, color=line_color, spaceBefore=0.5, spaceAfter=2.5)
        ]

    # PROFESSIONAL SUMMARY
    story.extend(section_header("PROFESSIONAL SUMMARY"))
    summary_text = (
        "Computer Science Engineering student with project experience in Python, SQL, data analytics, "
        "dashboard development, and AI-powered applications. Familiar with Tableau and Power BI for data "
        "visualization and with Python libraries for data analysis. Interested in Data Analytics, Data Science, "
        "and Machine Learning, with a focus on building practical, data-driven solutions."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 2))

    # TECHNICAL SKILLS
    story.extend(section_header("TECHNICAL SKILLS"))
    skills_data = [
        [
            Paragraph("<b>Programming:</b>", bold_body_style),
            Paragraph("Python, SQL, Java, JavaScript, HTML, CSS", body_style)
        ],
        [
            Paragraph("<b>Data Analytics &amp; BI:</b>", bold_body_style),
            Paragraph("Tableau, Power BI, Data Analysis, Data Visualization", body_style)
        ],
        [
            Paragraph("<b>AI &amp; Data:</b>", bold_body_style),
            Paragraph("Generative AI, Prompt Engineering, NumPy, Pandas", body_style)
        ],
        [
            Paragraph("<b>Frameworks &amp; Tools:</b>", bold_body_style),
            Paragraph("React, Node.js, Express.js, Flutter, MongoDB, Anaconda, Conda, Microsoft Office", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[1.35 * inch, 6.4 * inch])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 2))

    # PROJECTS
    story.extend(section_header("PROJECTS"))
    projects = [
        {
            "title": "Customer Churn Prediction",
            "bullets": [
                "Analyzed customer data to identify churn patterns based on customer tenure, contract type, and service usage.",
                "Explored customer behavior and developed insights to support customer retention strategies."
            ],
            "tech": "Python, Pandas, Scikit-learn, SQL, Power BI"
        },
        {
            "title": "Google Play Store Analysis",
            "bullets": [
                "Performed data cleaning and exploratory data analysis on Google Play Store data to examine app ratings, reviews, installs, and categories.",
                "Identified app performance trends and compared application categories."
            ],
            "tech": "Python, Pandas, NumPy, Matplotlib, Seaborn"
        },
        {
            "title": "Diabetes Data Analysis",
            "bullets": [
                "Analyzed a diabetes dataset to explore patterns across glucose levels, BMI, age, and other available health-related variables.",
                "Created data visualizations to identify correlations and compare recorded outcome patterns."
            ],
            "tech": "Python, Pandas, NumPy, Matplotlib, Seaborn"
        },
        {
            "title": "Breast Cancer Data Analysis",
            "bullets": [
                "Performed exploratory data analysis on a breast cancer dataset to examine tumor-related features and recorded diagnosis groups.",
                "Applied data visualization and statistical analysis to identify patterns in the dataset."
            ],
            "tech": "Python, Pandas, NumPy, Matplotlib, Seaborn"
        },
        {
            "title": "Unemployment Trend Analysis",
            "bullets": [
                "Analyzed unemployment data to explore changes over time and compare trends across available regions.",
                "Created visualizations to highlight unemployment patterns and communicate key economic insights."
            ],
            "tech": "Python, Pandas, NumPy, Matplotlib, Seaborn"
        }
    ]

    for p in projects:
        story.append(Paragraph(f"<b>{p['title']}</b>", bold_body_style))
        for b in p['bullets']:
            story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Paragraph(f"<b>Tech Stack:</b> {p['tech']}", tech_style))
        story.append(Spacer(1, 1.5))

    # INTERNSHIPS & EXPERIENCE
    story.extend(section_header("INTERNSHIPS & EXPERIENCE"))
    internships = [
        ("Data Analyst Intern – Thiranex", ["Developed five dashboards using Tableau and Power BI."]),
        ("Data Science Intern – CodeAlpha", ["Gained experience with Python, NumPy, Pandas, Anaconda, and Conda."]),
        ("Power BI Intern – CodeAlpha", ["Developed interactive Power BI dashboards and used DAX to create calculated measures for data-driven analysis."]),
        ("Data Analytics Intern – CodeSoft", ["Developed interactive dashboards to analyze business data and track key performance indicators, including profit and loss."]),
        ("Data Analytics Intern – Oasis Infobyte", ["Developed interactive dashboards to analyze business data and track key performance among the analysis"])
    ]
    for role, bullets in internships:
        story.append(Paragraph(f"<b>{role}</b>", bold_body_style))
        for b in bullets:
            story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Spacer(1, 1))

    # EDUCATION
    story.extend(section_header("EDUCATION"))
    edu_text = (
        "<b>B.E. Computer Science and Engineering</b> | Sri Shakthi Institute of Engineering and Technology | 2024–2028 | <b>CGPA: 8.3</b><br/>"
        "<b>Class XII:</b> 85.6% (2024) – Bannari Amman Vidya Niketan MHSS<br/>"
        "<b>Class X:</b> 90.2% (2022) – Bannari Amman Vidya Niketan MHSS"
    )
    story.append(Paragraph(edu_text, body_style))
    story.append(Spacer(1, 2))

    # CERTIFICATIONS & PUBLICATIONS
    story.extend(section_header("CERTIFICATIONS & PUBLICATIONS"))
    cert_text = (
        "<b>Databases & Programming:</b> NPTEL DBMS (Elite 60%) &nbsp;|&nbsp; HackerRank SQL (Intermediate) &nbsp;|&nbsp; HackerRank SQL (Basic) &nbsp;|&nbsp; HackerRank Java (Basic)<br/>"
        "<b>Industry & Simulations:</b> Thiranex Data Analytics &nbsp;|&nbsp; TATA GenAI Analytics &nbsp;|&nbsp; Deloitte Data Analytics &nbsp;|&nbsp; CodeAlpha (Power BI & Data Science) &nbsp;|&nbsp; Prodigy Web Dev<br/>"
        "<b>Cloud AI & Research:</b> AWS Generative AI &nbsp;|&nbsp; Great Learning (Excel & Digital Mktg) &nbsp;|&nbsp; Research Papers: Touch Free Extension & Festivo (UGC-CARE/Scopus)"
    )
    story.append(Paragraph(cert_text, body_style))
    story.append(Spacer(1, 2))

    # AREAS OF INTEREST & STRENGTHS
    story.extend(section_header("AREAS OF INTEREST & STRENGTHS"))
    interests_text = (
        "<b>Areas of Interest:</b> Machine Learning, Data Analytics, Artificial Intelligence, Computer Vision, Business Intelligence, Data Engineering<br/>"
        "<b>Strengths:</b> Problem Solving, Analytical Thinking, Self-Learning, Team Collaboration, Communication"
    )
    story.append(Paragraph(interests_text, body_style))

    doc.build(story)
    print(f"Successfully generated 1-page resume PDF at: {output_path}")

if __name__ == '__main__':
    out_dir = r"c:\Users\Bomathi\Downloads\My portofolio Intern.2\My portofolio Intern\public"
    out_file = os.path.join(out_dir, "Bomathi_S_Resume.pdf")
    generate_resume(out_file)
