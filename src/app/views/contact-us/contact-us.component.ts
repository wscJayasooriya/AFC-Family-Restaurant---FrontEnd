import {Component, OnInit, ViewChild} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../../dtos/comment';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  comment: Array<Comment> = [];
  tempComment: Comment = null;
  manuallySelected = false;
  selectedComment: Comment = new Comment();
  @ViewChild('frmContactUs') frmContactUs: NgForm;

  constructor(private commentService: CommentService, private http: HttpClient) { }

  ngOnInit() {
  }

  selectComment(comment: Comment): void {
    this.clear();
    this.selectedComment = comment;
    this.tempComment = Object.assign({}, comment);
    this.manuallySelected = true;
  }

  clear(): void {
    const  index = this.comment.indexOf(this.selectedComment);
    if (index !== -1) {
      this.comment[index] = this.tempComment;
      this.tempComment = null;
    }
    this.selectedComment = new Comment();
    this.manuallySelected = false;
  }

  saveComment(): void {
    this.commentService.saveComment(this.selectedComment).subscribe(
      (result) => {
        if (result) {
          swal({
            position: 'center',
            type: 'success',
            title: 'Your Comment has been Successfully.',
            showConfirmButton: false,
            timer: 3500
          });
          this.clear();
        } else {
          alert('Failed to save the Comment');
        }
      }
    );
  }

}
